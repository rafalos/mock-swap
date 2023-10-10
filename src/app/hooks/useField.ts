import { useState } from 'react';

export const useField = (
  validator: (value: string) => boolean,
  initialState: string = ''
) => {
  const [touched, setIsTouched] = useState(false);
  const [value, setValue] = useState(initialState);

  const isValid = validator(value);

  return {
    touched,
    setIsTouched,
    setValue,
    value,
    isValid,
  };
};
