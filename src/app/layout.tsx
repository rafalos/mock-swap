import { roboto } from './fonts';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'XM Task',
  description: 'XM task site',
=======
  title: 'MockSwap',
  description: 'MockSwap - here the journey begins',
  
>>>>>>> 2f582e4 (rename the app to MockSwap)
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
