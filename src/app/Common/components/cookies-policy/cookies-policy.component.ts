import { Component, OnInit } from '@angular/core';
import * as Routes from 'src/app/Core/routes/app-routes';

@Component({
  selector: 'pg-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent implements OnInit {
  routes = Routes;

  constructor() { }

  ngOnInit(): void {
  }

}
