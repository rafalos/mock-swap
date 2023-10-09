'use client';
import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.scss';

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-FR'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerEnabled = !!formIsValid;

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
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
