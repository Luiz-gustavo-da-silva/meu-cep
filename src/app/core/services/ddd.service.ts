import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ddd } from '../models/ddd-interface';

@Injectable({
  providedIn: 'root'
})
export class DddService {

  urlApi = "https://brasilapi.com.br/api/ddd/v1/";

  constructor(private http: HttpClient) {}

  getDdd(ddd: string): Observable<Ddd>{
    return this.http.get<Ddd>(this.urlApi+ddd);
  }
}
