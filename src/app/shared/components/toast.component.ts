import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="toast">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message: string = '';
}
