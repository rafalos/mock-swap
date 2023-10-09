import { StaticImageData } from 'next/image';

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  price_usd: string;
  percent_change_24h: string;
}

export interface Con {
  title: string;
  description: string;
  icon: string;
}

export interface Perk {
  title: string;
  description: string;
  icon: StaticImageData;
}
