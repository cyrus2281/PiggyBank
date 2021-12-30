import { Component, OnInit } from '@angular/core';
import * as Routes from 'src/app/Core/routes/app-routes';
import { RouterService } from 'src/app/Core/routes/router.service';

export type TermsPoliciesType = 'cookies' | 'privacy' | 'terms';
@Component({
  selector: 'pg-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
  providers: [
    {
      provide: RouterService,
      useClass: RouterService
    }
  ]
})
export class DisclaimerComponent implements OnInit {
  page: TermsPoliciesType  = 'terms';

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
    this.routerService.getRoute().paramMap.subscribe(param => {
      const urlPage = Routes.disclaimer_base_route + param.get(Routes.disclaimer_route_ID);

      switch (urlPage) {
        case Routes.privacy_route:
            this.page = 'privacy'
          break;
        case Routes.cookies_route:
            this.page = 'cookies'
          break;
        case Routes.terms_route:
        default:
            this.page = 'terms'
          break;
      }
    })
  }

}
