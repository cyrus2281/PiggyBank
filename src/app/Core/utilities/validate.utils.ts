
export type Validator = (...args: any) => Validation;
export type Validation = { isValid: boolean; error: string; }

const validEmailRegex: RegExp = /^(?:[a-z0-9!#$%*+/=?^{|}~-]+(?:\.[a-z0-9!#$%*+/=?^{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
export const emailValidator: Validator = (email: string) => {

  if (!email) {
    return { isValid: false, error: '' };
  }
  const emailAddress = email.trim();
  const localPart = emailAddress.split('@')[0];
  if (localPart.length > 64) {
    return { isValid: false, error: '' };
  }
  return { isValid: validEmailRegex.test(emailAddress), error: '' };
}

export const passwordValidator: Validator = (password: string) => {
  return { isValid: true, error: '' };;
}
export const sameTextValidator: Validator = (text: string, text2: string) => ({ isValid: text === text2, error: '' });

export const textLengthValidatorGenerator = (minLength: number, maxLength: number): Validator => {
  return (text: string) => {
    if (minLength <= text.length && text.length <= maxLength) {
      return {isValid: true, error:''};
    }
    return {isValid: false, error:''};
  }
}

