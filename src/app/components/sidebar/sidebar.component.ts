import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent {
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // Implementar lógica de pesquisa
    console.log('Pesquisar:', value);
  }
}