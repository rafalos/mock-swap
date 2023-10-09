import React from 'react';
import styles from './About.module.scss';

type Props = {};

const Divider = () => <div className={styles['cons__divider']}></div>;

const Header = (props: Props) => {
  return (
    <div className={styles['cons__heading']}>
      <h2>
        Why <strong>Trade</strong><br></br> with XM?
      </h2>
      <Divider />
      <p>
        We have been providing traders around the world with the same
        <strong> premium experience</strong> for over a decade. As an
        <strong> industry-leader</strong>, we know what the modern trader needs
        to be <strong>successful</strong> in the markets.
      </p>
    </div>
  );
};

export default Header;
