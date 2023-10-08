'use client';

import React from 'react';
import styles from './Intro.module.scss';
import Button from '../UI/Button';

const Intro = () => {
  return (
    <section className={styles['intro_section']}>
      <h2>Trade with</h2>
      <h1>
        <span>Zero Swaps</span> on All XM Ultra Low accounts for more than 25
        instruments
      </h1>
      <p>
        Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on
        instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.
      </p>
      <Button onClick={() => console.log('test')} title='Open account' />

      <p>New to trading? Try a Demo account</p>

      <p>Terms and Conditions apply*. to read the full T&C&apos;s, click here</p>
    </section>
  );
};

export default Intro;
