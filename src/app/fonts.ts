import { Bebas_Neue, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const berbasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});
