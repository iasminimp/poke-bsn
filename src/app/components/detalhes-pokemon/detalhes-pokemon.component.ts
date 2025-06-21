import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhes-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css'],
})
export class DetalhesPokemonComponent implements OnInit {
  pokemon: any;
  somaStats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    const nomeOuId = this.route.snapshot.paramMap.get('id');
    if (nomeOuId) {
      this.pokeService.getDetalhesPokemon(nomeOuId).subscribe((res) => {
        this.pokemon = res;
        this.somaStats = res.stats.reduce(
          (acc: number, stat: any) => acc + stat.base_stat,
          0
        );
      });
    }
  }
}
