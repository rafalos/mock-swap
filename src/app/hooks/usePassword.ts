import { useCallback, useEffect, useState } from 'react';
import {
  validatePasswordUppercase,
  validatePasswordLowercase,
  validatePasswordNumberExistence,
  validatePasswordSpecialCharacter,
  validatePasswordLength,
} from '../validations';

interface validatorState {
  upperCaseValid: boolean;
  lowerCaseValid: boolean;
  numbersValid: boolean;
  specialValid: boolean;
  range: boolean;
}

export const usePassword = () => {
  const [value, setValue] = useState('');
  const [validatorState, setValidatorState] = useState<validatorState>({
    upperCaseValid: false,
    lowerCaseValid: false,
    numbersValid: false,
    specialValid: false,
    range: false,
  });
  const [isTouched, setIsTouched] = useState(false);

  const isLocalValid = Object.values(validatorState).every(
    (validatorState) => validatorState
  );

  const isValid = isTouched && isLocalValid;

  const handleValidate = useCallback(() => {
    setValidatorState({
      upperCaseValid: validatePasswordUppercase(value),
      lowerCaseValid: validatePasswordLowercase(value),
      numbersValid: validatePasswordNumberExistence(value),
      specialValid: validatePasswordSpecialCharacter(value),
      range: validatePasswordLength(value),
    });
  }, [value]);

  useEffect(() => {
    handleValidate();
  }, [handleValidate]);

  return {
    setIsTouched,
    isTouched,
    value,
    setValue,
    validatorState,
    handleValidate,
    isValid,
  };
};
