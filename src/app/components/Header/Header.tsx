import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h2>MockSwap</h2>
      <ul className={styles['navbar__links']}>
        <li>MockSwap Homepage</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Header;
