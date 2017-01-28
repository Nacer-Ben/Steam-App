import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JeuComponent } from './jeu/jeu.component';
import { SingleComponent } from './single/single.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'les-jeux', component: JeuComponent },
  { path: 'les-jeux/:gameId', component: SingleComponent }
];
