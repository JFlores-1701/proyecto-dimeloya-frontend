export interface Opinion {
  codOpi:         number;
  puntOpi:        number;
  desOpi:         string;
  cantLikeOpi:    number;
  cantDisLikeOpi: number;
  codRestaOpi:    number;
  nomUsuarioOpi:  string;
}

export interface OpinionRequest {
  puntOpi:        number;
  desOpi:         string;
  codRestaOpi:    number;
  nomUsuarioOpi:  string;
}
