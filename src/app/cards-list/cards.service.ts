import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  constructor(private http: HttpClient) { }

  getPokemonCards(): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);

    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '25');


    return this.http.get(environment.pokemonAPIBaseURL + '/cards', { headers, params });
  }

  getPokemonCardById(id: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);

    return this.http.get(environment.pokemonAPIBaseURL + '/cards/' + id, { headers });
  }

}
