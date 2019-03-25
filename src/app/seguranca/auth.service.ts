import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  usuarioUrl: string;
  forgotUrl: string;
  registerUrl: string;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.usuarioUrl = `${environment.apiUrl}/api/user/me`;
    this.forgotUrl = `${environment.apiUrl}/api/password/create`
    this.registerUrl = `${environment.apiUrl}/api/register`
    
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded');
        
    const body = `grant_type=password&client_id=2&client_secret=0enp9fmVsbkeDGDfN2GWBvaYag60b3obCwH9XsF0&username=${usuario}&password=${senha}`;
    
    return this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = 'grant_type=refresh_token';
    return this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
        console.log('Novo access token criado!');
        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioNome');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  usuarioLogado() {
    return this.http.get<any>(this.usuarioUrl)
      .toPromise()
      .then(response => response);
  }

  forgot(data): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/json');
    
    return this.http.post<any>(this.forgotUrl, data, { headers, withCredentials: true })
      .toPromise();    
  }

  register(data): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/json');
    
    return this.http.post<any>(this.registerUrl, data, { headers, withCredentials: true })
      .toPromise();    
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }


}