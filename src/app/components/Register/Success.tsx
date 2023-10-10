import React from 'react';
import styles from './Success.module.scss';
import SuccessIcon from '../../../../public/success.png';
import Image from 'next/image';

const Success = () => {
  return (
    <div className={styles['success_box']}>
      <div className={styles['success_box__header']}>
        <Image src={SuccessIcon} alt='Registration successfull icon' />
        <h3>Registration Successful</h3>
      </div>
      <p>
        Thank you for registering for our event with XM. You will receive an
        email shortly with confirmation of your registration.
      </p>
    </div>
  );
};

export default Success;
