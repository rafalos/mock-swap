'use client';
import { usePassword } from '@/app/hooks/usePassword';
import React, { useState } from 'react';

type Props = {};

const PasswordField = () => {
  const {isValid, handleValidate, validatorState} = usePassword()

  return (
    <>
      <input type='password' onChange={handleValidate} />
      <ul>
        <li
          style={{
            color: validatorState.range ? 'green' : 'red',
          }}
        >
          8 - 15 characters
        </li>
        <li
          style={{
            color: validatorState.numbersValid ? 'green' : 'red',
          }}
        >
          1 or more numbers
        </li>
        <li
          style={{
            color: validatorState.lowerCaseValid ? 'green' : 'red',
          }}
        >
          1 or more lower case letters
        </li>
        <li
          style={{
            color: validatorState.upperCaseValid ? 'green' : 'red',
          }}
        >
          1 or more upper case letters
        </li>
        <li
          style={{
            color: validatorState.specialValid ? 'green' : 'red',
          }}
        >
          1 or more special characters (#[]()@$&*!?|,.^/\+_-)
        </li>
        <p>{isValid && <p>valid</p>}</p>
      </ul>
    </>
  );
};

export default PasswordField;
