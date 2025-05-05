export interface Cliente {
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
    ativo: boolean;
  }