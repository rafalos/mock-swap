import React from 'react';
import Header from './Header';
import styles from './Perks.module.scss';
import PerkList from './PerkList'

type Props = {};

const Perks = (props: Props) => {
  return (
    <section className={styles.perks}>
      <Header />
      <PerkList />
    </section>
  );
};

export default Perks;
