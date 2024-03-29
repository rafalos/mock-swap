import React from 'react';
import styles from './Perks.module.scss';

const Divider = () => <div className={styles['perks__divider']}></div>;

const Header = () => {
  return (
    <div className={styles['perks__header']}>
      <Divider />
      <h2>
        Big<span>.</span> Fair<span>.</span> Human<span>.</span>
      </h2>
      <p>
        Learn why <strong>over 5 million clients choose MockSwap</strong> as their
        trusted online broker.
      </p>
    </div>
  );
};

export default Header;
