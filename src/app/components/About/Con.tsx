import { Con } from '@/app/types';
import styles from './Con.module.scss';
import React from 'react';
import Image from 'next/image';

const Divider = () => {
  return <div className={styles.divider}></div>;
};

const Con = ({ description, icon, title }: Con) => {
  return (
    <div className={styles.con}>
      <Image
        className={styles['con__icon']}
        src={`/${icon}.png`}
        width={25}
        height={25}
        alt='test'
      />
      <div className={styles['con__head']}>
        <h3>{title}</h3>
      </div>
      <Divider />
      <div className={styles['con__body']}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Con;
