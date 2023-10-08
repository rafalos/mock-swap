import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Image src='/logo.png' alt='test' width={140} height={50} />
    </nav>
  );
};

export default Header;
