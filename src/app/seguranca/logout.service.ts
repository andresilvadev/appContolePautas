import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { CapptanHttp } from './capptan-http';


@Injectable()
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: CapptanHttp,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = `${environment.apiUrl}/api/tokens/revoke`;
  }

  logout() {
    return this.http.get(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}