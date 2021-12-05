
export type Validator = (...args: any) => Validation;
export type Validation = { isValid: boolean; error: string; }

const validEmailRegex: RegExp = /^(?:[a-z0-9!#$%*+/=?^{|}~-]+(?:\.[a-z0-9!#$%*+/=?^{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
export const emailValidator: Validator = (email: string) => {
  if (!email) {
    return { isValid: false, error: '' };
  }
  const emailAddress = email.trim();
  const localPart = emailAddress.split('@')[0];
  if (localPart.length > 64) {
    return { isValid: false, error: 'validate.error.localEmail' };
  }
  return { isValid: validEmailRegex.test(emailAddress), error: 'validate.error.invalidEmail' };
}

export const passwordValidatorGenerator = (translator: Function): Validator => {
  return (password: string) => {
    let error = '';
    if (password.length < 1) {
      return { isValid: true, error };
    }
    if (password.length < 8) {
      error = translator('validate.error.password.length');
    }
    if (!/[0-9]/.test(password)) {
      if (!!error) {
        error = error + '<br>' + translator('validate.error.password.hasNumber');
      } else {
        error = translator('validate.error.password.hasNumber');
      }
    }
    if (!/[a-z]/.test(password)) {
      if (!!error) {
        error = error + '<br>' + translator('validate.error.password.hasLower');
      } else {
        error = translator('validate.error.password.hasLower');
      }
    }
    if (!/[A-Z]/.test(password)) {
      if (!!error) {
        error = error + '<br>' + translator('validate.error.password.hasCapital');
      } else {
        error = translator('validate.error.password.hasCapital');
      }
    }
    if (!/[!@#$%^&*]/.test(password)) {
      if (!!error) {
        error = error + '<br>' + translator('validate.error.password.hasSymbol');
      } else {
        error = translator('validate.error.password.hasSymbol');
      }
    }
    return { isValid: !error, error };
  }
}

export const confirmPasswordValidator: Validator = (pass1: string, pass2: string) => ({ isValid: pass1 === pass2, error: 'validate.error.confirmPassword' });

export const sameTextValidator: Validator = (text: string, text2: string) => ({ isValid: text === text2, error: 'validate.error.sameText' });

export const textLengthValidatorGenerator = (minLength: number, maxLength: number): Validator => {
  return (text: string) => {
    if (text.length > 0 && minLength > text.length) {
      return { isValid: false, error: 'validate.error.tooShort' };
    } else if (text.length > maxLength) {
      return { isValid: false, error: 'validate.error.tooLong' };
    }
    return { isValid: true, error: '' };
  }
}

