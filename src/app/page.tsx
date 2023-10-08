import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import styles from './page.module.css';
import Assets from './components/Assets/Assets';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <Assets />
      <About />
    </main>
  );
}
