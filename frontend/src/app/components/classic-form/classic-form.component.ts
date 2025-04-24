import { Component,EventEmitter,Input, Output ,SimpleChanges} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../domain/product';
import { Message } from '../message/message.component';
import { InputNumber } from 'primeng/inputnumber';
import { ProductService } from '../../../service/productservice';
import {TabsComponent} from '../tabs/tabs.component';


@Component({
    selector: 'classic-form',
    templateUrl: './classic-form.component.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule,FormsModule,Message,InputNumber]
})
export class ClassicForm{
    @Input() nature : string ="";
    @Input() visible : boolean = false;
    @Output() visibleChange =new EventEmitter<boolean>
    reponse : string="";
    field : {[key : string] : string} = {
      numProduit: "N° produit",
      design: "Designation",
      prix: "Prix",
      quantite: "Quantité",
    }
    clicked : boolean = false;
    @Input() productData !: Product;
    @Output() annuler = new EventEmitter<void>
    @Output() annuler2 = new EventEmitter<string>

    constructor(private productService : ProductService ) {}

    async getMessage() {
        /*await this.productService.addSale(this.productData).subscribe({
        next: (data) => {
            this.productData = data;
                console.log('Données insérées :', this.productData);
                this.reponse="Données insérées";
            },
            error: (err) => {
                console.error('Erreur lors de l\'insertion des produits', err);
                this.reponse="Données non insérées"
            }
      });*/
      if (this.nature==="ajout") {
        this.ajoute();
      } else if (this.nature === "modification") {
        this.modifie();
      }
        this.clicked=true;
    }

    async ajoute(){
      if (this.notNull()) {
        this.productService.addSale(this.productData).subscribe({
        next: (data) => {
          this.reponse = "Données inséréees";
          console.log(data);
        },
        error: (err) => {
            this.reponse = "Données non inséréees";
          console.error('Erreur lors de la ajout des utilisateurs', err);
        }
      });
      }
    }

    async modifie(){
      if (this.notNull()) {
        this.productService.updateProduct(this.productData).subscribe({
          next:data => {
            this.reponse="Données modifiées ";
          },
          error: err =>{
            this.reponse="Données non modifiées ";
            console.error('Erreur lors de la modification des utilisateurs', err);
          }
        })
      }
    }

    notNull() : boolean{
      for(const key of Object.keys(this.productData)){
        if(this.productData[key as keyof Product] === "" || this.productData[key as keyof Product] === 0) 
        {
          this.reponse="Veuillez renseigner le champ "+this.field[key]
          return false
        }
      }
      return true;
    }

    close(button : string) {
      if(button==="enregistrer"){
        if(this.notNull()) {
          this.annuler2.emit('table'); 
          this.visibleChange.emit(false)
        }
      }
      else if(button==="annuler"){

        this.annuler.emit()
        this.annuler2.emit('table'); 
        this.visibleChange.emit(false)
      }
    }
}