'use client';

import React, { useEffect, useState } from 'react';
import { assetsToFetch, tickerUrl } from '../../../constants';
import Asset from './Asset';
import { CryptoAsset } from '@/app/types';
import { getAllTickers } from '@/app/services/ticker';

type Props = {
  tickers: CryptoAsset[];
};

const Assets = ({ tickers }: Props) => {
  return (
    <section>
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
    </section>
  );
};

export default Assets;
