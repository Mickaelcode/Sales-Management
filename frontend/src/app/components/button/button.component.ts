import { Component,Input} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  template: `
    <p-button [label]="label" [severity]="severity" (onClick)="handleClick()"></p-button>
  `,
  standalone: true,
  imports: [ButtonModule]
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null = 'primary';
  handleClick() {
    console.log(`Button "${this.label}" clicked with severity "${this.severity}"`);
  }
}
