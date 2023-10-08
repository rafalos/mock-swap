'use client';

import React, { useEffect, useState } from 'react';
import { assetsToFetch, tickerUrl } from '../../../constants';
import Asset from './Asset';
import { CryptoAsset } from '@/app/types';

type Props = {};

const Assets = (props: Props) => {
  const [assetData, setAssetData] = useState<CryptoAsset[]>([]);

  useEffect(() => {
    const fetchAssetData = async () => {
      const response = await fetch(tickerUrl);
      const { data } = await response.json();

      const assetsToRender = data.filter((asset: CryptoAsset) =>
        assetsToFetch.includes(asset.nameid)
      );

      setAssetData(assetsToRender);
    };

    fetchAssetData();
  }, []);

  return (
    <section>
      {assetData.map(
        ({ id, nameid, name, percent_change_24h, symbol, price_usd }) => {
          return (
            <Asset
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
