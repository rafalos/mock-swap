import React from 'react';
import { perks } from '@/constants';
import PerkItem from './PerkItem';
import styles from './Perks.module.scss';

const PerkList = () => {
  return (
    <div className={styles['perks__list']}>
      {perks.map((perk) => (
        <PerkItem
          key={perk.title}
          description={perk.description}
          icon={perk.icon}
          title={perk.title}
        />
      ))}
    </div>
  );
};

export default PerkList;
