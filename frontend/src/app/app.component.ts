import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { Diagramm } from './components/diagramm/diagramm.component';
import { PanelComponent } from './components/panel/panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuBarComponent,TabsComponent,Diagramm,PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-des-ventes';
}
