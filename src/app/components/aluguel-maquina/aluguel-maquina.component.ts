import { Component } from '@angular/core';

@Component({
  selector: 'app-aluguel-maquina',
  templateUrl: './aluguel-maquina.component.html',
  styleUrls: ['./aluguel-maquina.component.css']
})
export class AluguelMaquinaComponent {

  prosseguirAluguel(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const dadosAluguel = {
      cliente: (form['cliente'] as HTMLInputElement).value,
      cpf: (form['cpf'] as HTMLInputElement).value,
      telefone: (form['telefone'] as HTMLInputElement).value,
      email: (form['email'] as HTMLInputElement).value,
      cep: (form['cep'] as HTMLInputElement).value,
      endereco: (form['endereco'] as HTMLInputElement).value,
      numero: (form['numero'] as HTMLInputElement).value,
      bairro: (form['bairro'] as HTMLInputElement).value,
      estado: (form['estado'] as HTMLInputElement).value,
      tipoMaquina: (form['tipoMaquina'] as HTMLInputElement).value,
      modeloMaquina: (form['modeloMaquina'] as HTMLSelectElement).value,
      dataInicio: (form['dataInicio'] as HTMLInputElement).value,
      dataTermino: (form['dataTermino'] as HTMLInputElement).value
    };

    console.log('Dados do aluguel:', dadosAluguel);
    alert('Dados capturados com sucesso!');
  }
}
