export interface Operario {
    id: number;
    nome: string;
    endereco: string;
    cpf: string;
    alocado: boolean;
    enderecoObra?: string;
    obraAlocada?: string;
  }