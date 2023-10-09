import { Perk } from '@/app/types';
import Image from 'next/image';
import React from 'react';
import styles from './Perks.module.scss';

const PerkItem = ({ description, icon, title }: Perk) => {
  return (
    <div className={styles['perks__item']}>
      <Image src={icon} width={46} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PerkItem;
