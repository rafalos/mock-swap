'use client';
import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.scss';
import { usePassword } from '@/app/hooks/usePassword';
import { useField } from '@/app/hooks/useField';
import {
  validateAge,
  validateEmail,
  validateFullName,
} from '@/app/validations';
import { parseDate } from '@/app/utils';

const Form = () => {
  const {
    isValid: fullNameIsValid,
    setValue: setFullNameValue,
    value: fullNameValue,
  } = useField(validateFullName);

  const {
    isValid: dateIsValid,
    setValue: setDateValue,
    value: dateValue,
  } = useField(validateAge, parseDate(new Date().toLocaleDateString('en-US')));

  const {
    isValid: emailIsValid,
    setValue: setEmailValue,
    value: emailValue,
  } = useField(validateEmail);

  const {
    validatorState,
    value: passwordValue,
    setValue: setPasswordValue,
    setIsTouched,
    isValid: passwordIsValid,
  } = usePassword();

  const stepTracker = [passwordIsValid];

  const formIsValid =
    fullNameIsValid && dateIsValid && emailIsValid && passwordIsValid;

  return (
    <form className={styles.form}>
      <label>Full name</label>
      {!fullNameIsValid && <p>Please Enter Valid Name</p>}
      <input
        type='text'
        value={fullNameValue}
        onChange={(e) => setFullNameValue(e.target.value)}
      />
      <label>Date of birth</label>
      {!dateIsValid && <p>Minimum age requirements, 18 years old</p>}
      <input
        value={dateValue}
        type='date'
        onChange={(e) => {
          setDateValue(e.target.value);
        }}
      />
      <label>Email</label>
      {!emailIsValid && <p>Please Enter Valid Email</p>}
      <input
        type='email'
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
      />
      <label>Password</label>
      <label htmlFor=''>
        <input
          type='password'
          value={passwordValue}
          onFocus={() => setIsTouched(true)}
          onChange={(e) => setPasswordValue(e.target.value)}
          className={
            styles[`form__input--${passwordIsValid ? 'valid' : 'invalid'}`]
          }
        />
        <ul className={styles['form__checklist']}>
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
        </ul>
      </label>
      {formIsValid && (
        <Button onClick={(e) => console.log(e)} title='Continue' />
      )}
      <p>Don’t have an account? Create one here and register for the event</p>
      <p>Terms and Conditions apply*. To read the full T&Cs, click here.</p>
    </form>
  );
};

export default Form;
