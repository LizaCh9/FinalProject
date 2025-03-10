import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    canActivate: [AuthGuard],
    loadComponent: () => import('./components/product-list/product-list.component').then(m => m.ProductListComponent),

}
];

