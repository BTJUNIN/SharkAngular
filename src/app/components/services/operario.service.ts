import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operario } from '../models/operarios';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {
  private apiUrl = 'http://localhost:4200/operarios'; // Ajuste para sua API

  constructor(private http: HttpClient) {}

  getOperarios(pagina: number): Observable<Operario[]> {
    return this.http.get<Operario[]>(`${this.apiUrl}?page=${pagina}`);
  }

  addOperario(operario: Operario): Observable<Operario> {
    return this.http.post<Operario>(this.apiUrl, operario);
  }

  deleteOperario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}