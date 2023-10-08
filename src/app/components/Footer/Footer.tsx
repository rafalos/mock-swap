import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles['footer__links']}>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Cookie Policy</a>
          </li>
          <li>
            <a href='#'>Terms and conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <Image
          src={'/trading_point.png'}
          width={182}
          height={60}
          alt='TradingPoint logo'
        />
      </div>
    </footer>
  );
};

export default Footer;
