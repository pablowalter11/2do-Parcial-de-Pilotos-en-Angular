import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../interfaces/piloto.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  constructor(private http: HttpClient) { }

  urlBase = environment.urlBase

  getPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(this.urlBase)
  }

  getPilotoById(id: string | null): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.urlBase}/${id}`)
  }

  postPiloto(piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(this.urlBase, piloto)
  }

  putPiloto(piloto: Piloto, id: string | null): Observable<Piloto> {
    return this.http.put<Piloto>(`${this.urlBase}/${id}`, piloto)
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`)
  }
}