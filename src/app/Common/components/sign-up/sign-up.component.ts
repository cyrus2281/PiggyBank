import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Account/services/auth.service';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import { LocalizationService } from 'src/app/Core/localization/localization.service';
import { emailValidator, passwordValidatorGenerator, confirmPasswordValidator, textLengthValidatorGenerator, Validator } from 'src/app/Core/utilities/validate.utils';
import * as Routes from 'src/app/Core/routes/app-routes';

@Component({
  selector: 'pg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  buttonStyle = ButtonStyleEnum.PRIMARY;
  emailValidator = emailValidator;
  textLengthValidator = textLengthValidatorGenerator(2, 32);
  confirmPasswordValidator = confirmPasswordValidator;
  passwordValidator!: Validator;
  routes = Routes;

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

  constructor(private localizationService: LocalizationService, public authService: AuthService) {
    this.passwordValidator = passwordValidatorGenerator(this.localizationService.translate.bind(localizationService))
  }

  ngOnInit(): void {
  }

  signUp() {
    if (this.isValid.email && this.isValid.password && this.isValid.confirmPassword && this.isValid.name) {
      this.authService.signUp(this.name, this.email, this.password);
    }
  }
}
