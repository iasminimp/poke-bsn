import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getListaPokemon(limit: number = 151): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}`);
  }

  getDetalhesPokemon(urlOuId: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${urlOuId}`);
  }

  getMultiplosPokemons(ids: (number | string)[]): Observable<any[]> {
    return forkJoin(ids.map((id) => this.getDetalhesPokemon(id)));
  }
}
