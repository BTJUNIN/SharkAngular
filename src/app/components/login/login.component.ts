import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fazerLogin(event: Event) {
    event.preventDefault();
    console.log('Login enviado.');
    // Aqui você pode fazer lógica de autenticação ou redirecionamento
  }
}