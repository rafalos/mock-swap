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
  disabled,
  ...rest
}: Props & React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      disabled={disabled}
      className={`${berbasNeue.className} ${styles.button} ${
        disabled ? styles['button--disabled'] : null
      }`}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
