import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardsListService {

  constructor(private http: HttpClient) { }

  getPokemonCards() {
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);

    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '50');


    return this.http.get(environment.pokemonAPIBaseURL + '/cards', { headers, params });
  }

}
