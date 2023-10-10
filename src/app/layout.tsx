import { roboto } from './fonts';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XM Task',
  description: 'XM task site',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
