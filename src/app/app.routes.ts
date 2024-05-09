import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dog-breed-info-page',
    loadComponent: () => import('./dog-breed-info-page/dog-breed-info-page.page').then( m => m.DogBreedInfoPagePage)
  },
  {
    path: 'dog-facts',
    loadComponent: () => import('./dog-facts/dog-facts.page').then( m => m.DogFactsPage)
  },
  {
    path: 'dog-history',
    loadComponent: () => import('./dog-history/dog-history.page').then( m => m.DogHistoryPage)
  },
  {
    path: 'dog-pets',
    loadComponent: () => import('./dog-pets/dog-pets.page').then( m => m.DogPetsPage)
  },

];
