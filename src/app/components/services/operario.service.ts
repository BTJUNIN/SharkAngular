import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operario } from '../models/operarios';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {
  private operariosMock: Operario[] = [
    {
      id: 1,
      nome: 'joao gabriel',
      endereco: 'Curabitur donec duis',
      cpf: '123-123-12312',
      alocado: true,
      enderecoObra: 'estr campo limpo,143',
      obraAlocada: '1'
    },
    {
      id: 2,
      nome: 'luis gustavo',
      endereco: 'sdad',
      cpf: '123-123-12313',
      alocado: false,
      enderecoObra: 'Av. Central, 123',
      obraAlocada: 'não alocado'
    }
  ];

  getOperarios(pagina: number): Observable<Operario[]> {
    // Simulando paginação
    return of(this.operariosMock);
  }

  deleteOperario(id: number): Observable<void> {
    // Simulando deleção
    this.operariosMock = this.operariosMock.filter(op => op.id !== id);
    return of(undefined);
  }
}