import { Bebas_Neue, Roboto } from 'next/font/google';

export const berbasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

export const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
