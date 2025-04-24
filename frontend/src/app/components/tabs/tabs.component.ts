import { Component, OnInit, ViewEncapsulation,Input,Output, EventEmitter} from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../service/productservice';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MOCK_PRODUCTS } from '../../../service/productData';
//import { ClassicForm } from '../classic-form/classic-form.component';
import { Form } from '../form/form.component';
import { Delete } from '../delete/delete.component';

@Component({
  selector: 'app-tabs',
  imports: [TableModule, CommonModule, ButtonModule,Form,Delete],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  @Input() products!: Product[];
  searchTerm : string ="";
  affiche : boolean = false;
  tab : TabsComponent = this;
  @Output() refresh = new EventEmitter<void>
  /*@Input() search !: string;
  @Output() searchChange = new EventEmitter<string>;*/

  constructor(
    private productService: ProductService,
  ) {}


  ngOnInit() {
    this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
          console.log('Utilisateurs récupérés :', this.products);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des utilisateurs', err);
        }
      });
    this.refresh.emit()
      //this.products = MOCK_PRODUCTS;
  }

  afficher(){
    this.affiche=true;
  }

  searchCritera(search : string){
    this.searchTerm = search
		const term = this.searchTerm.toLowerCase();
		this.products = this.products.filter(product =>
		  product.numProduit.toLowerCase().startsWith(term)
		);
  }

}