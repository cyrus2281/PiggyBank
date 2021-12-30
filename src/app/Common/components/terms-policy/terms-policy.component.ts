import { Component, OnInit } from '@angular/core';
import * as Routes from 'src/app/Core/routes/app-routes';

@Component({
  selector: 'pg-terms-policy',
  templateUrl: './terms-policy.component.html',
  styleUrls: ['./terms-policy.component.scss']
})
export class TermsPolicyComponent implements OnInit {
  routes = Routes;

  constructor() { }

  ngOnInit(): void {
  }

}
