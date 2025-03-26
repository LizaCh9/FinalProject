import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then(m => m.CartComponent)
  }
];

