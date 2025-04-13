import { Component,Input } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../../../domain/product';

@Component({
    selector: 'form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class Form {
    visible: boolean = false;
    @Input() data !: Product;
    showDialog() {
        this.visible = true;
    }
}