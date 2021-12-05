import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';
import { LocalizationService } from 'src/app/Core/localization/localization.service';
import { emailValidator, passwordValidatorGenerator, confirmPasswordValidator, textLengthValidatorGenerator, Validator } from 'src/app/Core/utilities/validate.utils';

@Component({
  selector: 'pg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  buttonStyle =  ButtonStyleEnum.PRIMARY;
  emailValidator = emailValidator;
  textLengthValidator = textLengthValidatorGenerator(2,32);
  confirmPasswordValidator = confirmPasswordValidator;
  passwordValidator!: Validator;

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

  constructor(private localizationService : LocalizationService) {
      this.passwordValidator = passwordValidatorGenerator(localizationService.translate.bind(localizationService))
   }

  ngOnInit(): void {
  }

}
