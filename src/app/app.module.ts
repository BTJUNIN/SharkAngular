import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarOperarioComponent } from './components/cadastrar-operario/cadastrar-operario.component';
import { OperariosListComponent } from './components/operarios/operarios-list.component';
import { AluguelMaquinaComponent } from './components/aluguel-maquina/aluguel-maquina.component';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CadastrarClienteComponent,
    CadastrarOperarioComponent,
    OperariosListComponent,
    AluguelMaquinaComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LandingPageComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
