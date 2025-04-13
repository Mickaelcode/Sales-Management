import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FieldsetModule, AvatarModule],
  templateUrl: './panel.component.html'
})
export class PanelComponent {

}
