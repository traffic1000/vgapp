import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolesComponent } from './consoles/consoles.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: ConsolesComponent
  },
  {
    path: 'games/:id',
    component: GamesComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
