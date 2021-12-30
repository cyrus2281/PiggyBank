import { Component, OnInit } from '@angular/core';
import * as Routes from 'src/app/Core/routes/app-routes';

@Component({
  selector: 'pg-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  routes = Routes;

  constructor() { }

  ngOnInit(): void {
  }

}
