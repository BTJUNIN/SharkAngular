import { Routes } from '@angular/router';
import { OperariosListComponent } from './components/operarios/operarios-list.component';
import { CadastrarOperarioComponent } from './components/cadastrar-operario/cadastrar-operario.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { AluguelMaquinaComponent } from './components/aluguel-maquina/aluguel-maquina.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



 // Importação corrigida

export const routes: Routes = [
  { path: 'operarios', component: OperariosListComponent },
  { path: 'cadastrar-operario', component: CadastrarOperarioComponent },
  { path: 'cadastrar-cliente', component: CadastrarClienteComponent },
  { path: '', redirectTo: '/operarios', pathMatch: 'full' },
  { path: 'aluguel-maquina', component: AluguelMaquinaComponent},
  { path: 'login', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent }
];