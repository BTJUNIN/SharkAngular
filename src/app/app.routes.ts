import { Routes } from '@angular/router';
import { OperariosListComponent } from './components/operarios/operarios-list.component';
import { CadastrarOperarioComponent } from './components/cadastrar-operario/cadastrar-operario.component';

export const routes: Routes = [
  { path: 'operarios', component: OperariosListComponent },
  { path: 'cadastrar-operario', component: CadastrarOperarioComponent },
  { path: '', redirectTo: '/operarios', pathMatch: 'full' }
];