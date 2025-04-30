import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Operario } from '../models/operarios';
import { OperarioService } from '../services/operario.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastrar-operario.component.html',
  styleUrls: ['./cadastrar-operario.component.css']
})
export class CadastrarOperarioComponent {
  operario: Operario = {
    id: 0,
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    estado: '',
    alocado: false
  };

  constructor(
    private operarioService: OperarioService,
    private router: Router
  ) {}

  cadastrarOperario() {
    this.operarioService.addOperario(this.operario).subscribe({
      next: () => {
        alert('Operário cadastrado com sucesso!');
        this.router.navigate(['/operarios']);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar operário:', err);
        alert('Erro ao cadastrar operário');
      }
    });
  }
}