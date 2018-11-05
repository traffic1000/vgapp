import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolesComponent } from './consoles/consoles.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {
    path: '',
    component: ConsolesComponent
  },
  {
    path: 'games/:id',
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
