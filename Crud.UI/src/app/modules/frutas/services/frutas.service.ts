import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrutaData, FrutaDataPost, FrutaDataPut } from '../models/fruta.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  private apiUrl = `${environment.api}Fruta/`;

  constructor(private http: HttpClient) {}

  // Obtener todas las frutas
  getFrutasData(): Observable<FrutaData[]> {
    return this.http.get<FrutaData[]>(`${this.apiUrl}get-frutas`);
  }

  // Obtener una fruta por ID (Usando FromQuery en el backend)
  getFrutaById(id: number): Observable<FrutaData> {
    return this.http.get<FrutaData>(`${this.apiUrl}get-fruta-by-id`, {
      params: { id: id.toString() }
    });
  }

  // Insertar una fruta
  insertFruta(fruta: FrutaDataPost): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}insert-fruta`, fruta);
  }

  // Actualizar una fruta
  updateFruta(fruta: FrutaDataPut): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}update-fruta`, fruta);
  }

  // Eliminar una fruta (Usando FromQuery en el backend)
  deleteFruta(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}delete-fruta`, {
      params: { id: id.toString() }
    });
  }
}
