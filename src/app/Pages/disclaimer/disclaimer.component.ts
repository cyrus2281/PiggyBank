import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/Core/routes/router.service';

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
  page: 'cookies' | 'privacy' | 'terms' = 'terms';

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
    this.routerService.getRoute().paramMap.subscribe(param => {
      const urlPage = param.get('disclaimer');
      
      switch (urlPage) {
        case 'privacy_policy':
            this.page = 'privacy'
          break;
        case 'cookies_policy':
            this.page = 'cookies'
          break;
        case 'terms_conditions':
        default:
            this.page = 'terms'
          break;
      }
    })
  }

}
