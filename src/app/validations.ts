const upperCaseRegexp = /[A-Z]/;
const lowerCaseRegexp = /[a-z]+/;
const specialRegexp = /[*@!#%&()^~{}]+/;
const rangeRegexp = /^.{8,15}$/;
const digitRegexp = /\d/;

const validateName = (value: string) => {};

export const validatePasswordLength = (value: string) =>
  rangeRegexp.test(value);
export const validatePasswordUppercase = (value: string) =>
  upperCaseRegexp.test(value);
export const validatePasswordLowercase = (value: string) =>
  lowerCaseRegexp.test(value);
export const validatePasswordSpecialCharacter = (value: string) =>
  specialRegexp.test(value);
export const validatePasswordNumberExistence = (value: string) =>
  digitRegexp.test(value);
