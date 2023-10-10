import styles from './page.module.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Gallery from './components/Gallery/Gallery';
import Assets from './components/Assets/Assets';
import Perks from './components/Perks/Perks';
import { assetsToFetch } from '@/constants';
import { getAllTickers } from './services/ticker';
import { CryptoAsset } from './types';
import Vector from '../../public/vector.png';
import Image from 'next/image';

async function getTickers() {
  const data = await getAllTickers();

  const assetsToRender = data.filter((asset: CryptoAsset) =>
    assetsToFetch.includes(asset.nameid)
  );

  return assetsToRender;
}

export default async function Home() {
  const tickers = await getTickers();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Image src={Vector} alt='Background artifact' className={styles.vector}/>
        <Intro />
        <Assets tickers={tickers} />
        <About />
        <Register />
        <Gallery />
        <Perks />
      </main>
      <Footer />
    </>
  );
}
