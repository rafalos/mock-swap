import React from 'react';
import { cons } from '@/constants';
import Con from './Con';
import styles from './About.module.scss';
import Heading from './Heading';

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <Heading />
      <div className={styles.cons}>
        {cons.map((con) => (
          <Con key={con.title} {...con} />
        ))}
      </div>
    </section>
  );
};

export default About;
