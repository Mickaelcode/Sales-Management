import { Component, EventEmitter, Input,OnInit,Output} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../../service/productservice';
import {Product} from '../../../domain/product';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [Menubar,DialogModule,InputTextModule,ButtonModule, FormsModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
    items: MenuItem[] | undefined;
	numProduit:string =''
	designation:string =''
	prix:number = 0
	quantite: number = 0
	@Output() itemMenu = new EventEmitter<string>


	constructor( 
		private productservice : ProductService
    ){}

	handleClick(){
		const sale :Product = {
		numProduit:this.numProduit,
		design:this.designation,
		prix:this.prix,
		quantite:this.quantite
	}
		this.productservice.addSale(sale).subscribe({
			next: (data)=>{
				console.log("add yessssss")
				confirm("ajout avec succe")
			},
			error: (err)=>{
				console.log('error add')
			}
		})
	}

    ngOnInit() {
        this.items = [
            {
                label: 'Table',
                icon: 'pi pi-table',
                command: () => {
                    this.itemMenu.emit('table');
                }
            },
            {
                label: 'Ajouter',
                icon: 'pi pi-plus',
                command: () => {
                    this.itemMenu.emit('addPage');
                }
            },
            {
                label: 'Histogramme',
                icon: 'pi pi-chart-bar',
                command: () => {
                    this.itemMenu.emit('histogramm');
                }
            }
        ]
    }

	
}
