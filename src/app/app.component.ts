import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {LoginComponent } from './components/login/login.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ProductListComponent, ProductDetailComponent, RouterOutlet, FooterComponent, HomeComponent, LoginComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NovaStore';
}

