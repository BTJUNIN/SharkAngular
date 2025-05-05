import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Adicione esta importação



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterModule]
  
})
export class SidebarComponent {
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // Implementar lógica de pesquisa
    console.log('Pesquisar:', value);
  }
}