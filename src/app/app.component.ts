import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './Core/animations/route.animations';

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

  prepareRoute(outlet: RouterOutlet){
    return outlet?.activatedRouteData
  }
}
