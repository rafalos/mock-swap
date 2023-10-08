import { Con } from './app/types';

export const assetsToFetch = [
  'bitcoin',
  'ethereum',
  'ripple',
  'litecoin',
  'bitcoin-cash',
];

export const cons: Con[] = [
  {
    title: 'Superior Trade Execution',
    description:
      '99% of trades are executed in less than a second, with no requotes or rejections.',
    icon: 'fast-execusion-icon',
  },
  {
    title: 'Competitive Pricing',
    description:
      'We offer some of the lowest spreads and we don’t charge commissions.',
    icon: 'competitive-pricing-icon',
  },
  {
    title: 'Advanced Technology',
    description:
      '99% of trades are executed in less than a second, with no requotes or rejections.',
    icon: 'tech-icon',
  },
  {
    title: 'Start with $5',
    description:
      'Start trading your preferred instruments with as little as a $5 minimum deposit.',
    icon: 'dollar-icon',
  },
];

export const tickerUrl = 'https://api.coinlore.net/api/tickers/';
