import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {
  pokemons: any[] = [];
  pokemonsFiltrados: any[] = [];

  busca: string = '';

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokeService.getListaPokemon().subscribe((res: any) => {
      this.pokemons = res.results;
      this.pokemonsFiltrados = this.pokemons;
    });
  }

  filtrarPokemons(): void {
    this.pokemonsFiltrados = this.pokemons.filter((p) =>
      p.name.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  getIdFromUrl(url: string): string {
    const partes = url.split('/');
    return partes[partes.length - 2];
  }

  getImagemPokemon(pokemon: any): string {
    const id = this.getIdFromUrl(pokemon.url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
