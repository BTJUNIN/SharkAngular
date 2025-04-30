import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Adicione esta linha
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha
import { RouterModule } from '@angular/router'; // Adicione esta linha


import { AppComponent } from './app.component';
import { CadastrarOperarioComponent } from './components/cadastrar-operario/cadastrar-operario.component';
import { OperariosListComponent } from './components/operarios/operarios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarOperarioComponent,
    OperariosListComponent,
    RouterModule, 
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione esta linha para ngModel
    HttpClientModule,
    RouterModule // Adicione esta linha para HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }