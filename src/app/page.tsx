import styles from './page.module.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register'
import Gallery from './components/Gallery/Gallery'
import Assets from './components/Assets/Assets';
import Perks from './components/Perks/Perks';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Assets />
        <About />
        <Register />
        <Gallery />
        <Perks />
      </main>
      <Footer />
    </>
  );
}
