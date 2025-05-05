import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from './../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {
  cliente: Cliente = {
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
    ativo: true
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  cadastrarCliente() {
    this.clienteService.addCliente(this.cliente).subscribe({
      next: () => {
        alert('Cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar cliente:', err);
        alert('Erro ao cadastrar cliente');
      }
    });
  }
}