import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Mydata } from '../../interfaces/mydata';
import { NgFor } from '@angular/common';
import {NgIf} from '@angular/common';
import { ToastComponent } from '../shared/toast.component';
import {PricePipe} from '../../pipes/price.pipe';


@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NgFor, NgIf, ToastComponent, PricePipe]
})
export class CartComponent implements OnInit {
  cartItems: Mydata[] = [];
  toastMessage = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.toastMessage = '🧹 Cart has been cleared!';
    setTimeout(() => this.toastMessage = '', 3000);
  }
}

