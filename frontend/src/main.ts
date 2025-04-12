import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { FormField } from './app/components/forms/forms.component';
//import { MenuBarComponent } from './app/components/menu-bar/menu-bar.component';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
