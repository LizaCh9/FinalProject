import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message: string = '';

  showMessage() {
    this.message = 'Hello! You clicked the button.';
  }
}

