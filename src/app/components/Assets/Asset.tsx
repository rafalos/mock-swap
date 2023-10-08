import React, { useEffect } from 'react';
import styles from './Asset.module.scss';
import { CryptoAsset } from '@/app/types';
import Image from 'next/image';

const Divider = () => <div className={styles.divider}></div>;

const Asset = ({
  nameid,
  symbol,
  name,
  price_usd,
  percent_change_24h,
}: CryptoAsset) => {
  const tickerClass =
    Math.sign(+percent_change_24h) >= 0 ? 'positive' : 'negative';

  return (
    <div className={styles.asset}>
      <div className={styles['asset__metadata']}>
        <Image
          src={`/${nameid}.png`}
          alt={`Crypto asset ${name} icon`}
          width={34}
          height={34}
        />
        {symbol}
        <div className={styles['asset__badge']}>{name}</div>
      </div>
      <Divider />
      <div className={styles['asset__price']}>
        <div>${price_usd}</div>
        <div className={styles[`asset__price--${tickerClass}`]}>
          {percent_change_24h}
        </div>
      </div>
    </div>
  );
};

export default Asset;
