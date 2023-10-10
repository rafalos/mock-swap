'use client';
import React from 'react';
import styles from './Gallery.module.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { events } from '@/constants';
import useIsMobile from '@/app/hooks/useIsMobile';
import useIsTabet from '@/app/hooks/useIsTablet';

type Props = {
  count: number;
};

const Events = ({ count }: Props) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTabet();

  const getCount = () => {
    if (isMobile) return 2;
    if (isTablet) return 4;
    return 5;
  };

  const toDisplay = events.slice(0, getCount());

  return (
    <div className={styles['gallery__events']}>
      <FaChevronLeft />
      {toDisplay.map((ev) => (
        <Image src={ev.image} alt={ev.alt} key={ev.alt} />
      ))}
      <FaChevronRight />
    </div>
  );
};

export default Events;
