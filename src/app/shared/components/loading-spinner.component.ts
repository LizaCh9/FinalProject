import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="spinner"></div>`,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {}
