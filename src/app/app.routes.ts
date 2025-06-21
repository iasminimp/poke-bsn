import { Routes } from '@angular/router';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { DetalhesPokemonComponent } from './components/detalhes-pokemon/detalhes-pokemon.component';
import { ComparadorComponent } from './components/comparador/comparador.component';

export const routes: Routes = [
  {
    path: '',
    component: ListaPokemonComponent,
  },
  {
    path: 'detalhes/:id',
    component: DetalhesPokemonComponent,
  },
  {
    path: 'comparar',
    component: ComparadorComponent,
  },
];
