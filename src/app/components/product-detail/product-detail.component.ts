import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Mydata} from '../../interfaces/mydata';
import {ApiService} from '../../services/api.service';
import {CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

  product: Mydata | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getProduct(Number(id)).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
