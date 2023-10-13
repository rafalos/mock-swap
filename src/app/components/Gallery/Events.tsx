'use client';
import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { events } from '@/constants';
import useIsMobile from '@/app/hooks/useIsMobile';
import useIsTabet from '@/app/hooks/useIsTablet';

const Events = () => {
  const toDisplay = events.slice(0, 5);

  return (
    <div className={styles['gallery__events']}>
      <FaChevronLeft />
      {toDisplay.map((ev) => (
        <Image
          className={styles.event}
          src={ev.image}
          alt={ev.alt}
          key={ev.alt}
          height={100}
          width={100}
        />
      ))}
      <FaChevronRight />
    </div>
  );
};

export default Events;
