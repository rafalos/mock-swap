'use client';
import React from 'react';
import styles from './Gallery.module.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { events } from '@/constants';

type Props = {
  count: number;
};

const Events = ({ count }: Props) => {
  return (
    <div className={styles['gallery__events']}>
      <FaChevronLeft />
      {events.map((ev) => (
        <Image src={ev.image} alt={ev.alt} key={ev.alt} />
      ))}
      <FaChevronRight />
    </div>
  );
};

export default Events;
