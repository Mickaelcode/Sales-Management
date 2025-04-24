import { Component, Output, EventEmitter, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { Diagramm } from './components/diagramm/diagramm.component';
import { PanelComponent } from './components/panel/panel.component';
import { minMaxTotal } from '../domain/minMaxTotal';
import { ProductService } from '../service/productservice';
import { ClassicForm } from './components/classic-form/classic-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuBarComponent,TabsComponent,Diagramm,PanelComponent,ClassicForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  minMaxTotal !: minMaxTotal;
  component : { [cle: string]: boolean } = {
    addPage: false,
    table: true,
    histogramm: false
  };
  title = 'gestion-des-ventes';
  searchTerm : string ="";
  @Output() keyEvent = new EventEmitter<string>

  constructor(
    private productService: ProductService,
) {}
  ngOnInit() {
    this.refresh()
  }
  showComponent(component : string){
    for(const key of Object.keys(this.component)){
      if (key === component) this.component[key]=true
      else this.component[key] = false
    }
  }
  refresh(){
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
