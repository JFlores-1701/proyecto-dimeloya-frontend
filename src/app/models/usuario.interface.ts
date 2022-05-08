export interface Cliente {
  nomUsuario: string;
  apeUsuario: string;
  emailUsuario: string;
  passUsuario: string;
}

export interface ClienteResponse {
  codUsuario: number,
  nomUsuario: string;
  apeUsuario: string;
  emailUsuario: string;
  passUsuario: string;
}

export interface LoginCliente {
  emailUsuario: string;
  passUsuario: string;
}

