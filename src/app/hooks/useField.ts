import { useState } from 'react';

export const useField = (
  validator: (value: string) => boolean,
  initialState: string = ''
) => {
  const [value, setValue] = useState(initialState);

  const isValid = validator(value);

  return {
    setValue,
    value,
    isValid,
  };
};
