import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FaRegCalendar } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Details.module.scss'

type Props = {};

const Details = (props: Props) => {
  return (
    <div className={styles.details}>
      <h2>- Register Here -</h2>
      <p>Join us to celebrate our biggest night of the year</p>
      <div className={styles.info}>
        <div className={styles['info__box']}>
          <FaRegCalendar size={26}/>
          <p>05 NOVEMBER 2022</p>
        </div>
        <div className={styles['info__box']}>
          <FaRegClock size={26}/>
          <p>16:00 – 23:00</p>
        </div>
        <div className={styles['info__box']}>
          <FaMapMarkerAlt size={26}/>
          <p>Centara Grand & Bangkok Convention Centre, Bangkok</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
