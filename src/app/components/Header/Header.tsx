import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Image src='/logo.png' alt='XM Logo' width={140} height={50} />
      <ul className={styles['navbar__links']}>
        <li>XM Homepage</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Header;
