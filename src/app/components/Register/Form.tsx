'use client';
import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.scss';
import { usePassword } from '@/app/hooks/usePassword';

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-FR'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {
    validatorState,
    value,
    setValue,
    setIsTouched,
    isValid: passwordIsValid,
  } = usePassword();

  const registerEnabled = !!formIsValid;

  const stepTracker = [passwordIsValid];

  return (
    <form className={styles.form}>
      <label>Full name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Date of birth</label>
      <input
        type='date'
        onChange={(e) => {
          const d = new Date(e.target.value).toLocaleDateString();
          setDate(d);
        }}
      />
      <label>Email</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <label htmlFor=''>
        <input
          type='password'
          value={value}
          onFocus={() => setIsTouched(true)}
          onChange={(e) => setValue(e.target.value)}
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
      <Button
        onClick={(e) => console.log(e)}
        title='Continue'
        disabled={!registerEnabled}
      />
      <p>Don’t have an account? Create one here and register for the event</p>
      <p>Terms and Conditions apply*. To read the full T&Cs, click here.</p>
    </form>
  );
};

export default Form;
