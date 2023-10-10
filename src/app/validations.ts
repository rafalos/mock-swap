const upperCaseRegexp = /[A-Z]/;
const lowerCaseRegexp = /[a-z]+/;
const specialRegexp = /[*@!#%&()^~{}]+/;
const rangeRegexp = /^.{8,15}$/;
const digitRegexp = /\d/;
const fullNameRegexp = /^[a-zA-Z\s]*$/;
const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const validateAge = (value: string) => {
  const dateParts = value.split('-');
  const userYear = +dateParts[0];
  const currentYear = new Date().getFullYear();

  const validAge = currentYear - userYear >= 18 && currentYear - userYear < 50;

  return validAge;
};

export const validateEmail = (value: string) =>
  emailRegexp.test(value) && value.trim() !== '';
export const validateFullName = (value: string) =>
  fullNameRegexp.test(value) && value.trim() !== '';
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
