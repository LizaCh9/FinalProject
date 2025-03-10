import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Mydata} from '../../interfaces/mydata';
import {ApiService} from '../../services/api.service';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit{
  products: Mydata[] = [];


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (data) => {
        console.log("Received Products:", data);
        this.products = data; },
      (error) => { console.error(error); },
    );
    console.error(this.products)
  }
}

