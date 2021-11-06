import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';

@Component({
  selector: 'pg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  buttonStyle =  ButtonStyleEnum.PRIMARY;

  constructor() { }

  ngOnInit(): void {
  }

}
