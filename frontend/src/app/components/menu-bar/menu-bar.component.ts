import { Component, OnInit } from '@angular/core';
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
    displayFeatureDialog: boolean = false;
	numProduit:string =''
	designation:string =''
	prix:number = 0
	quantite: number = 0

	constructor( 
		private productservice : ProductService,
			   ){}






	handleClick(){
		const sale = {
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

		this.displayFeatureDialog = false
	}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Ajouter',
                icon: 'pi pi-star',
                command: () => {
                    this.displayFeatureDialog = true;
                }
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}
