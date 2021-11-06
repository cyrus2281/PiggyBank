import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';

@Component({
  selector: 'pg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  buttonStyle =  ButtonStyleEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
