import { Component, OnInit } from '@angular/core';
import { Operario } from '../models/operarios';
import { CommonModule } from '@angular/common'; 
import { OperarioService } from '../services/operario.service';

@Component({
  selector: 'app-operarios-list',
  imports: [CommonModule], // Adicione esta linha
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
    this.operarioService.getOperarios(this.paginaAtual)
      .subscribe(operarios => this.operarios = operarios);
  }

  editarOperario(operario: Operario): void {
    // Implementar lógica de edição
    console.log('Editar operário:', operario);
  }

  deletarOperario(id: number): void {
    if (confirm('Tem certeza que deseja deletar este operário?')) {
      this.operarioService.deleteOperario(id)
        .subscribe(() => {
          this.carregarOperarios();
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