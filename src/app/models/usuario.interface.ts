export interface Cliente {
  nomUsuario: string;
  apeUsuario: string;
  emailUsuario: string;
  passUsuario: string;
  codSuscri: string;
}

export interface ClienteResponse {
  codUsuario: number,
  nomUsuario: string;
  apeUsuario: string;
  emailUsuario: string;
  passUsuario: string;
  codSuscri: string;
  desSuscri: string;
}

export interface LoginCliente {
  emailUsuario: string;
  passUsuario: string;
}

