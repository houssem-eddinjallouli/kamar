import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { BebBhar } from './beb-bhar/beb-bhar';
import { Medina } from './medina/medina';
import { Borj } from './borj/borj';
import { Bitftour } from './bitftour/bitftour';

export const routes: Routes = [
  //redirect to menue

  { path: 'menue', component: Menu },
  { path: '', redirectTo: '/menue', pathMatch: 'full' },
  { path: 'beb-bhar', component: BebBhar },
  { path: 'medina', component: Medina },
  { path: 'borj', component: Borj },
  { path: 'bitftour', component: Bitftour },
  { path: '**', component: Menu },
];
