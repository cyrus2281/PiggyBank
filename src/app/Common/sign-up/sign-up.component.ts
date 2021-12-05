import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';
import { emailValidator, passwordValidator, sameTextValidator, textLengthValidatorGenerator } from 'src/app/Core/utilities/validate.utils';

@Component({
  selector: 'pg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  buttonStyle =  ButtonStyleEnum.PRIMARY;
  emailValidator = emailValidator;
  textLengthValidator = textLengthValidatorGenerator(2,32);
  sameTextValidator = sameTextValidator;
  passwordValidator = passwordValidator;

  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  isValid = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
