import { Con, Perk } from './app/types';
import PerkAward from '../public/perk-award.png';
import PerkProtect from '../public/perk-protect.png';
import PerkSupport from '../public/perk-support.png';
import PerkTeam from '../public/perk-team.png';
import EventImage from '../public/event.svg';
import FastExecusion from '../public/fast-execusion-icon.png';
import CompetitivePricing from '../public/competitive-pricing-icon.png';
import Tech from '../public/tech-icon.png';
import Dollar from '../public/dollar-icon.png';

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
    icon: FastExecusion,
  },
  {
    title: 'Competitive Pricing',
    description:
      'We offer some of the lowest spreads and we don’t charge commissions.',
    icon: CompetitivePricing,
  },
  {
    title: 'Advanced Technology',
    description:
      '99% of trades are executed in less than a second, with no requotes or rejections.',
    icon: Tech,
  },
  {
    title: 'Start with $5',
    description:
      'Start trading your preferred instruments with as little as a $5 minimum deposit.',
    icon: Dollar,
  },
];

export const perks: Perk[] = [
  {
    title: 'Authorised and Regulated',
    description:
      'At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.',
    icon: PerkProtect,
  },
  {
    title: 'Committed and Fair',
    description:
      'We operate with complete transparency and adhere to the highest professional and ethical standards.',
    icon: PerkTeam,
  },
  {
    title: 'Multi-Award-Winning',
    description:
      'Over the years we have received over 40 awards for the quality of our products and services.',
    icon: PerkAward,
  },
  {
    title: '24/7 Support',
    description:
      'Our support agents are on hand 24/7 to answer your questions or assist you with any issues.',
    icon: PerkSupport,
  },
];

export const events = [
  {
    id: 1,
    image: EventImage,
    alt: 'This is picture of sample event #1',
  },
  {
    id: 2,
    image: EventImage,
    alt: 'This is picture of sample event #2',
  },
  {
    id: 3,
    image: EventImage,
    alt: 'This is picture of sample event #3',
  },
  {
    id: 4,
    image: EventImage,
    alt: 'This is picture of sample event #4',
  },
  {
    id: 5,
    image: EventImage,
    alt: 'This is picture of sample event #5',
  },
];

export const tickerUrl = 'https://api.coinlore.net/api/tickers/';
