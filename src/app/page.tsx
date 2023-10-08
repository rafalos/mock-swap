import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';
import Assets from './components/Assets/Assets';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Assets />
        <About />
      </main>
      <Footer />
    </>
  );
}
