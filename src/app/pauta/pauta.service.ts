import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { CapptanHttp } from '../seguranca/capptan-http';
import { PautaModel } from '../core/model';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class PautaService {

    pautaUrl: string;

    constructor(
        private http: CapptanHttp
    ) {
        this.pautaUrl = `${environment.apiUrl}/api/pautas`;
    }

    listarTodas(): Promise<any> {
        return this.http.get<any>(this.pautaUrl)
            .toPromise()
            .then(response => response);
    }

    excluir(id: number): Promise<void> {
        return this.http.delete(`${this.pautaUrl}/${id}`)
            .toPromise()
            .then(() => null);
    }

    mudarStatus(id: number, status: boolean): Promise<void> {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json');
        return this.http.put(`${this.pautaUrl}/${id}/ativo`, status, { headers })
            .toPromise()
            .then(() => null);
    }

    adicionar(pauta: PautaModel): Promise<PautaModel> {
        return this.http.post<PautaModel>(this.pautaUrl, pauta)
            .toPromise();
    }

    atualizar(pauta: PautaModel): Promise<PautaModel> {
        return this.http.put<PautaModel>(`${this.pautaUrl}/${pauta.id}`, pauta)
            .toPromise();
    }

    buscarPorCodigo(id: number): Promise<PautaModel> {
        return this.http.get<PautaModel>(`${this.pautaUrl}/${id}`)
            .toPromise();
    }

}