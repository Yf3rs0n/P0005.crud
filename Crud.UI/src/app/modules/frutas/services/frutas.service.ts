import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { FrutaData } from '../models/fruta.model';
import { Observable } from 'rxjs';

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
