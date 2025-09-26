import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Home } from './pages/home/home';
import { Map } from './pages/map/map';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'welcome', component: Welcome },
  { path: 'home', component: Home },
  { path: 'map', component: Map }
];
