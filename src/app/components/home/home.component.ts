import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgIf, RouterLink]
})
export class HomeComponent {
  message: string = '';

  constructor(private router: Router) {}

  showMessage() {
    this.message = '🚀 NovaStore welcomes you!';
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 1000); // 2 seconds
  }
}

