import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Image src='/logo.png' alt='MockSwap Logo' width={140} height={50} />
      <ul className={styles['navbar__links']}>
        <li>MockSwap Homepage</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Header;
