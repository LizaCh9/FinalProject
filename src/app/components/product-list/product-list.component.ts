import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import { Mydata } from '../../interfaces/mydata';
import { ApiService } from '../../services/api.service';
import {RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../shared/loading-spinner.component';
import { PricePipe } from '../../pipes/price.pipe';
import { map, switchMap } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, RouterLink, AsyncPipe, LoadingSpinnerComponent, PricePipe],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Mydata[]>;

  constructor(private apiService: ApiService,
              private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.products$ = this.router.queryParamMap.pipe(
      map(params => params.get('category')),
      switchMap(category =>
        this.apiService.getData().pipe(
          map(products => {
            if (!category) return products;
            return products.filter(p =>
              p.category.toLowerCase().includes(category.toLowerCase())
            );
          })
        )
      )
    );
  }
}
