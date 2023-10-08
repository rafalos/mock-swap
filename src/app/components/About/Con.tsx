import { Con } from '@/app/types';
import styles from './Con.module.scss';
import React from 'react';
import Image from 'next/image';

const Con = ({ description, icon, title }: Con) => {
  return (
    <div className={styles.con}>
      {`/${icon}.png`}
      <div className={styles['con__head']}>
        <h3>{title}</h3>
          <Image src={`/${icon}.png`} width={25} height={25} alt='test'/>
      </div>
      <div className={styles['con__body']}></div>
    </div>
  );
};

export default Con;
