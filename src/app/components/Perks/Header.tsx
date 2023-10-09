import React from 'react';
import styles from './Perks.module.scss';

type Props = {};

const Divider = () => <div className={styles['perks__divider']}></div>;

const Header = (props: Props) => {
  return (
    <div className={styles['perks__header']}>
      <Divider />
      <h2>
        Big<span>.</span> Fair<span>.</span> Human<span>.</span>
      </h2>
      <p>
        Learn why <strong>over 5 million clients choose XM</strong> as their trusted online
        broker.
      </p>
    </div>
  );
};

export default Header;
