import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Form } from '../form/form.component';

@Component({
  selector: 'app-tabs',
  imports: [TableModule, CommonModule, ButtonComponent,Form],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  products!: Product[];

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
    }
}
