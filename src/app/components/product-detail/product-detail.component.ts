import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Mydata} from '../../interfaces/mydata';
import {ApiService} from '../../services/api.service';
import {CommonModule, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

  product: Mydata | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private cartService: CartService ) {}

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product added to cart!');
    }
  }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    console.log('🧭 Route ID:', idParam, '| Parsed ID:', id)

    if (!id || isNaN(id)) {
      console.warn('⚠️ Invalid product ID in route!');
      return;
    }

     {
      this.apiService.getProduct(Number(id)).subscribe(
        (data) => {
          console.log('✅ Loaded product:', data);
          this.product = data;
        },
        (error) => {
          console.error('❌ API error:', error);
        }
      );
    }
  }
}
