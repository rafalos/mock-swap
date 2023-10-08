import React from 'react';
import { cons } from '@/constants';
import Con from './Con';
import styles from './About.module.scss';

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <h2>Why Trade with XM?</h2>
      <p>
        We have been providing traders around the world with the same
        <strong>premium experience</strong> for over a decade. As an
        <strong>industry-leader</strong>, we know what the modern trader needs
        to be <strong>successful</strong> in the markets.
      </p>

      <div className={styles.cons}>
        {cons.map((con) => (
          <Con key={con.title} {...con} />
        ))}
      </div>
    </section>
  );
};

export default About;
