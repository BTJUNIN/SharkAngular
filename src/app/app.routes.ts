import { Routes } from '@angular/router';
import { OperariosListComponent } from './components/operarios/operarios-list.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'operarios', 
    pathMatch: 'full' 
  },
  { 
    path: 'operarios', 
    component: OperariosListComponent 
  },
  // Adicione outras rotas conforme necessário
];