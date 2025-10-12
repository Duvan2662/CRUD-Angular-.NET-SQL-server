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

  deleteTarjeta(id:number): Observable<any>{
    return this.http.delete(this.Backend_Url + '/' + id);
  }

  addTarjeta(tarjeta:any): Observable<any>{
    return this.http.post(this.Backend_Url, tarjeta);
  }

  editTarjeta(id:number, tarjeta:any): Observable<any>{
    return this.http.put(this.Backend_Url + '/' + id, tarjeta);
  }

}
