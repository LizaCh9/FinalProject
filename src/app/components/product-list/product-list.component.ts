import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import { Mydata } from '../../shared/interfaces/mydata';
import { ApiService } from '../../services/api.service';
import {RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner.component';
import { PricePipe } from '../../shared/pipes/price.pipe';
import { map, switchMap } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, startWith } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, RouterLink, AsyncPipe, LoadingSpinnerComponent, PricePipe, ReactiveFormsModule],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Mydata[]>;

  constructor(private apiService: ApiService,
              private router: ActivatedRoute,
              public authService: AuthService,
              private cartService: CartService  ) {
  }

  searchControl = new FormControl('');

  ngOnInit(): void {
    const category$ = this.router.queryParamMap.pipe(
      map(params => params.get('category'))
    );

    const search$ = this.searchControl.valueChanges.pipe(
      startWith('')
    );


    this.products$ = combineLatest([category$, search$]).pipe(
      switchMap(([category, searchText]) =>
        this.apiService.getData().pipe(
          map(products => {
            return products.filter(p => {
              const matchesCategory = category
                ? p.category.toLowerCase().includes(category.toLowerCase())
                : true;

              const matchesSearch = searchText
                ? p.title.toLowerCase().includes(searchText.toLowerCase())
                : true;

              return matchesCategory && matchesSearch;
            });
          })
        )
      )
    );
  }

  addToCart(product: Mydata): void {
    if (!this.authService.isLoggedIn()) {
      window.alert('You must be logged in to add items to cart.');
      return;
    }

    this.cartService.addToCart(product);
  }
}
