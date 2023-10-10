import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Investors from '../../../../public/logos/Investors.png';
import MetaQuotes from '../../../../public/logos/MetaQuotes.png';
import Unicef from '../../../../public/logos/Unicef.png';
import Verisign from '../../../../public/logos/Verisign.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__one']}>
        <div className={styles['footer__one__logos']}>
          <Image src={Investors} alt='Investors company logo' />
          <Image src={MetaQuotes} alt='MetaQuotes company logo' />
          <Image src={Unicef} alt='Unicef company logo' />
          <Image src={Verisign} alt='Verisign company logo' />
        </div>
        <div className={styles['footer__one__socials']}>
          <span>Follow us on</span>
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div className={styles['footer__one__socials']}></div>
      </div>
      <div className={styles['footer__two']}>
        <div>
          <ul className={styles['footer__two__links']}>
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
      </div>
    </footer>
  );
};

export default Footer;
