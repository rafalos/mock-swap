import { Bebas_Neue, Roboto_Mono } from 'next/font/google';

export const berbasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});

export const roboto = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
