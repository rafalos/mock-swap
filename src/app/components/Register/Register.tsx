import React from 'react';
import Details from './Details';
import Form from './Form';
import styles from './Details.module.scss';

type Props = {};

const Register = (props: Props) => {
  return (
    <section className={styles.register}>
      <Details />
      <Form />
    </section>
  );
};

export default Register;
