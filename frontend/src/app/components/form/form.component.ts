import { Component,Input } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../../../domain/product';
import { Message } from '../message/message.component';
import { ProductService } from '../../../service/productservice';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule,Message,FormsModule]
})
export class Form{
    visible: boolean = false;
    stringMessage: string = "";
    response: string ="";
    clicked : boolean=false;   
    @Input() show : boolean=false;
    @Input() productData !: Product;

    constructor(private productService : ProductService,) {}


    showDialog() {
        this.visible = true;
    }
    save() {
        this.productService.updateProduct(this.productData).subscribe({
        next: (data) => {
          this.response = "Données modifiées";
          console.log(data);
        },
        error: (err) => {
            this.response = "Données non modifiées";
          console.error('Erreur lors de la récupération des utilisateurs', err);
        }
      });
      this.show=true;
    }
}