import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comparador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css'],
})
export class ComparadorComponent implements OnInit {
  listaPokemons: any[] = [];
  nomePokemon1 = '';
  nomePokemon2 = '';
  filtro1: any[] = [];
  filtro2: any[] = [];

  detalhesPokemon1: any = null;
  detalhesPokemon2: any = null;

  mensagemErro = '';
  vencedor: number | null = null;

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokeService.getListaPokemon().subscribe((res: any) => {
      this.listaPokemons = res.results;
    });
  }

  buscarPokemon(numero: number) {
    const nome = numero === 1 ? this.nomePokemon1 : this.nomePokemon2;
    this.pokeService.getDetalhesPokemon(nome.toLowerCase()).subscribe((res) => {
      if (numero === 1) this.detalhesPokemon1 = res;
      else this.detalhesPokemon2 = res;
    });
  }

  resetarComparacao() {
    this.detalhesPokemon1 = null;
    this.detalhesPokemon2 = null;
    this.vencedor = null;
    this.mensagemErro = '';
  }

  filtrarPokemon(nome: string, campo: number) {
    const filtrados = this.listaPokemons.filter((p) =>
      p.name.toLowerCase().includes(nome.toLowerCase())
    );

    if (campo === 1) {
      this.filtro1 = filtrados;
      this.resetarComparacao();
    } else {
      this.filtro2 = filtrados;
      this.resetarComparacao();
    }
  }

  selecionar(nome: string, campo: number) {
    if (campo === 1) {
      this.nomePokemon1 = nome;
      this.filtro1 = [];
    } else {
      this.nomePokemon2 = nome;
      this.filtro2 = [];
    }
    this.resetarComparacao();
  }

  esconderSugestoes(campo: number) {
    setTimeout(() => {
      if (campo === 1) this.filtro1 = [];
      else this.filtro2 = [];
    }, 200);
  }

  calcularStatusTotal(pokemon: any): number {
    if (!pokemon || !pokemon.stats) return 0;
    return pokemon.stats.reduce(
      (total: number, stat: any) => total + stat.base_stat,
      0
    );
  }

  compararStatus(): string {
    const total1 = this.calcularStatusTotal(this.detalhesPokemon1);
    const total2 = this.calcularStatusTotal(this.detalhesPokemon2);

    if (total1 > total2) {
      this.vencedor = 1;
      return `${this.detalhesPokemon1.name} é mais forte`;
    }
    if (total2 > total1) {
      this.vencedor = 2;
      return `${this.detalhesPokemon2.name} é mais forte`;
    }

    this.vencedor = null;
    return 'Ambos têm o mesmo poder!';
  }

  comparar() {
    if (!this.nomePokemon1 || !this.nomePokemon2) {
      this.mensagemErro = 'Selecione os dois Pokémons para comparar!';
      return;
    }
    this.mensagemErro = '';
    this.vencedor = null;
    this.buscarPokemon(1);
    this.buscarPokemon(2);
    setTimeout(() => this.compararStatus(), 500);
  }
}
