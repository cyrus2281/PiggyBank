
export type Validator = (...args: any) => boolean;

const validEmailRegex: RegExp = /^(?:[a-z0-9!#$%*+/=?^{|}~-]+(?:\.[a-z0-9!#$%*+/=?^{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
export const emailValidator: Validator = (email: string) => {
  if (!email) {
    return false;
  }
  const emailAddress = email.trim();
  const localPart = emailAddress.split('@')[0];
  if (localPart.length > 64) {
    return false;
  }
  return validEmailRegex.test(emailAddress);
}

export const passwordValidator: Validator = (password: string) => {
  return true;
}
export const sameTextValidator: Validator = (text: string, text2: string) => text === text2

export const textLengthValidatorGenerator = (minLength: number, maxLength: number): Validator => {
  return (text: string) =>
     minLength <= text.length && text.length <= maxLength;
}

