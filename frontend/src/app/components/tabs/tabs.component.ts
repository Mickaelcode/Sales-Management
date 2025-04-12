import { Component, OnInit } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tabs',
  imports: [TableModule, CommonModule, ButtonComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  standalone: true,
  providers: [ProductService,ButtonComponent]
})

export class TabsComponent implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}
