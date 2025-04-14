import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { Diagramm } from './components/diagramm/diagramm.component';
import { PanelComponent } from './components/panel/panel.component';
import { minMaxTotal } from '../domain/minMaxTotal';
import { ProductService } from '../service/productservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuBarComponent,TabsComponent,Diagramm,PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  minMaxTotal !: minMaxTotal;
  title = 'gestion-des-ventes';

  constructor(
    private productService: ProductService,
) {}
  ngOnInit() {
    this.productService.getMinMaxTotal().subscribe(
       {
       next: (data) => {
         this.minMaxTotal = data;
       },
       error: (err) => {
         console.error('Erreur lors de la récupération des utilisateurs', err);
       }
     }
   );
}
}
