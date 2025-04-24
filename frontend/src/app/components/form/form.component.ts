import { Component,EventEmitter,Input, Output } from '@angular/core';
//import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../../../domain/product';
//import { Message } from '../message/message.component';
import { ProductService } from '../../../service/productservice';
import { FormsModule } from '@angular/forms';
import { ClassicForm } from '../classic-form/classic-form.component';
import {TabsComponent} from '../tabs/tabs.component';


@Component({
    selector: 'form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [ClassicForm, ButtonModule, InputTextModule,FormsModule]
})
export class Form{
    visible: boolean = false;
    stringMessage: string = "";
    response: string ="";
    clicked : boolean=false;   
    @Input() show : boolean=false;
    @Input() produit!: Product;
    @Output() annuler2 = new EventEmitter<void>

    constructor(private productService : ProductService, private tab : TabsComponent) {}

    annuler(){
      this.annuler2.emit();
    }

    showDialog() {
        this.visible = true;
    }
    save() {
        this.productService.updateProduct(this.produit).subscribe({
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