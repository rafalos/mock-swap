'use client';

import React from 'react';
import styles from './Button.module.scss';
import { berbasNeue } from '@/app/fonts';

type Props = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  title,
  onClick,
  ...rest
}: Props & React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={`${berbasNeue.className} ${styles.button}`}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
