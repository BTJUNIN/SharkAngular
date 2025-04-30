export interface Operario {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  bairro?: string;
  estado?: string;
  alocado: boolean;
  enderecoObra?: string;
  obraAlocada?: string;
}