import React from 'react';
import Asset from './Asset';
import { CryptoAsset } from '@/app/types';
import styles from './Asset.module.scss'

type Props = {
  tickers: CryptoAsset[];
};

const Assets = ({ tickers }: Props) => {
  if (!tickers || tickers.length == 0) return <div>Failed to fetch data</div>;

  return (
    <section>
      <div className={styles.assets}>
        {tickers.map(
          ({ id, nameid, name, percent_change_24h, symbol, price_usd }) => {
            return (
              <Asset
                id={id}
                nameid={nameid}
                name={name}
                key={id}
                percent_change_24h={percent_change_24h}
                symbol={symbol}
                price_usd={price_usd}
              ></Asset>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Assets;
