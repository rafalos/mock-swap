'use client';
import React from 'react';
import styles from './Intro.module.scss';
import Button from '../UI/Button';

const Intro = () => {
  return (
    <section>
      <div className={styles['intro_section']}>
        <h2>Trade with</h2>
        <h1>
          <strong>Zero Swaps</strong> on All XM Ultra Low Accounts for more than
          25 instruments!
        </h1>
        <p>
          Enjoy spreads <strong>as low as 0.6 pips</strong> and
          <strong> leverage up to 1000:1</strong> on instruments like
          <strong> EURUSD, USDJPY, EURJPY, GBPUSD</strong>, and
          <strong> Gold</strong>.
        </p>
        <Button onClick={() => console.log('test')} title='Open account' />

        <p>New to trading? Try a Demo account.</p>

        <p>
          Terms and Conditions apply*. to read the full T&C&apos;s, click here.
        </p>
      </div>
    </section>
  );
};

export default Intro;
