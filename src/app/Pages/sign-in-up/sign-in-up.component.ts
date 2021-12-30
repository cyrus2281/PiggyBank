import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import APP_THEME from 'src/app/Core/theme/theme';
import { slider } from 'src/app/Core/animations/route.animations';

@Component({
  selector: 'pg-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss'],
  animations: [
    slider
  ]
})
export class SignInUpComponent {
  app_theme = APP_THEME;

  constructor() { }

  prepareRoute(outlet: RouterOutlet){
    return outlet?.activatedRouteData?.['page'];
  }
}
