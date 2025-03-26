import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mydata } from '../../shared/interfaces/mydata';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [NgIf, CommonModule, CommonModule],
})
export class ProductDetailComponent implements OnInit {
  product: Mydata | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    console.log('🧭 Route ID:', idParam, '| Parsed ID:', id);

    if (!id || isNaN(id)) {
      console.warn('⚠️ Invalid product ID in route!');
      return;
    }

    this.apiService.getProduct(id).subscribe({
      next: (data: Mydata) => {
        console.log('✅ Loaded product:', data);
        this.product = data;
      },
      error: (error: any) => {
        console.error('❌ API error:', error);
      }
    });
  }

  addToCart(): void {
    if (!this.authService.isLoggedIn()) {
      window.alert('You must be logged in to add items to cart.');

      setTimeout(() => {
        window.location.href = '/login';
      }, 700);

      return;
    }

    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product added to cart!');
    }
  }
}
