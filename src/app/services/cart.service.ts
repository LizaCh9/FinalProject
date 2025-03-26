import { Injectable } from '@angular/core';
import { Mydata } from '../interfaces/mydata';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';

  getCart(): Mydata[] {
    const raw = localStorage.getItem(this.cartKey);
    return raw ? JSON.parse(raw) : [];
  }

  addToCart(product: Mydata) {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem('cart');
    console.log('🧹 Cart cleared (simulated DELETE)');
  }
}
