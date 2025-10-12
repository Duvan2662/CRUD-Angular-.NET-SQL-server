import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarjetaServicesService {

  Backend_Url = 'https://localhost:7275/api/Tarjeta';

  constructor(private http:HttpClient) { }
  getAllTarjetas(): Observable<any>{
    return this.http.get(this.Backend_Url);
  }
}
