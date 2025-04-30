import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Operario } from '../models/operarios';
import { OperarioService } from '../services/operario.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './operarios-list.component.html',
  styleUrls: ['./operarios-list.component.css']
})
export class OperariosListComponent implements OnInit {
  operarios: Operario[] = [];
  paginaAtual: number = 1;
  totalPaginas: number = 5;
  paginas: number[] = [1, 2, 3, 4, 5];

  constructor(private operarioService: OperarioService) {}

  ngOnInit(): void {
    this.carregarOperarios();
  }

  carregarOperarios(): void {
    this.operarioService.getOperarios(this.paginaAtual).subscribe({
      next: (operarios: Operario[]) => {
        this.operarios = operarios;
      },
      error: (err: any) => {
        console.error('Erro ao carregar operários:', err);
      }
    });
  }

  editarOperario(operario: Operario): void {
    console.log('Editar operário:', operario);
  }

  deletarOperario(id: number): void {
    if (confirm('Tem certeza que deseja deletar este operário?')) {
      this.operarioService.deleteOperario(id).subscribe({
        next: () => {
          this.carregarOperarios();
        },
        error: (err: any) => {
          console.error('Erro ao deletar operário:', err);
        }
      });
    }
  }

  mudarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
      this.carregarOperarios();
    }
  }
}