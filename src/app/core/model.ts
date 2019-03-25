export class PautaModel {
    id: number;
    titulo: string;
    descricao: string;
    detalhes: string;
    autor: string;
    status: string = "ABERTO";
}

export class UsuarioModel {
    name: string;
    email: string;
    password: string;
    confirmaSenha: string;
}