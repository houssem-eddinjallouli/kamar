import { Routes } from '@angular/router';
import { Menu } from './menu/menu';

export const routes: Routes = [
  //redirect to menue

  { path: 'menue', component: Menu },
  { path: '', redirectTo: '/menue', pathMatch: 'full' },
  { path: '**', component: Menu },
];
