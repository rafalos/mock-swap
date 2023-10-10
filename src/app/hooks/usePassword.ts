import { useCallback, useEffect, useState } from 'react';

const upperCase = /[A-Z]/;
const lowerCase = /[a-z]+/;
const special = /[*@!#%&()^~{}]+/;
const range = /^.{8,15}$/;
const digit = /\d/;

interface validatorState {
  upperCaseValid: boolean;
  lowerCaseValid: boolean;
  numbersValid: boolean;
  specialValid: boolean;
  range: boolean;
}

export const usePassword = () => {
  const [value, setValue] = useState('')
  const [validatorState, setValidatorState] = useState<validatorState>({
    upperCaseValid: false,
    lowerCaseValid: false,
    numbersValid: false,
    specialValid: false,
    range: false,
  });
  const [isValid, setIsValid] = useState(true);
  const checkValidation = useCallback(() => {
    for (const key in validatorState) {
      if (!validatorState[key]) {
        setIsValid(false);
      }
    }
  }, [validatorState]);

  useEffect(() => {
    checkValidation();
  }, [validatorState, checkValidation]);

  const handleValidate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setValidatorState({
      upperCaseValid: upperCase.test(value),
      lowerCaseValid: lowerCase.test(value),
      numbersValid: digit.test(value),
      specialValid: special.test(value),
      range: range.test(value),
    });
  };

  return {
    value,
    setValue,
    validatorState,
    handleValidate,
    isValid,
  };
};
