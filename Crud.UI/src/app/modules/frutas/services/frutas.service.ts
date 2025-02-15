import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrutaData } from '../models/fruta.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.api;

  getFrutasData(): Observable<FrutaData[]> {
    return this.http.get<FrutaData[]>(`${this.apiUrl}Fruta/get-frutas`);
  }
}
