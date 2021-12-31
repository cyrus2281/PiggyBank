import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './Core/animations/route.animations';
import APP_THEME from './Core/theme/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent {
  title = 'PiggyBank';
  app_theme = APP_THEME;

  prepareRoute(outlet: RouterOutlet){
    return outlet?.activatedRouteData
  }
}
