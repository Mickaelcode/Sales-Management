import { Component,Input} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {ProductService} from '../../../service/productservice';

@Component({
  selector: 'app-button',
  template: `
    <p-button [label]="label" [severity]="severity"   (onClick)="handleClick()"></p-button>
	

  `,
  standalone: true,
  imports: [ButtonModule]
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() numProduit!:string;
  @Input() severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null = 'primary';

	constructor( private productService: ProductService,){}

  handleClick() {
    if (this.label=='Modifier'){
      
    }
	else if(this.label== "Supprimer"){
		if(confirm("Voulez vous vraiment Supprimer?")){
			this.productService.deleteSale(this.numProduit).subscribe({
				next: (data) =>{
					console.log("delete yesss")
				},
				error: (err)=>{
					console.log("error delete")
				}
			})

		}
	}
	else if(this.label=="Enregistrer"){
		console.log('Enrigistrer')
	}
  }
}
