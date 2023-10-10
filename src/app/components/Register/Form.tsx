'use client';
import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.scss';
import { usePassword } from '@/app/hooks/usePassword';
import { useField } from '@/app/hooks/useField';
import {
  validateAge,
  validateEmail,
  validateFullName,
} from '@/app/validations';
import { parseDate } from '@/app/utils';
import ProgressBar from '@ramonak/react-progress-bar';
import Success from './Success';
import { register } from '@/app/services/user';
import useIsMobile from '@/app/hooks/useIsMobile';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();

  const getCurrentClass = (validState: boolean, touchedState: boolean) => {
    if (!validState && !touchedState) return 'initial';
    if (touchedState && !validState) return 'invalid';
    return 'valid';
  };

  const handleRegister = async (e) => {
    setCurrentStep((prev) => 3);
    e.preventDefault();
    const response = await register({
      date: dateValue,
      email: emailValue,
      fullName: fullNameValue,
      password: passwordValue,
    });

    setCurrentStep((prev) => 4);
  };

  const {
    touched: fullNameTouched,
    setIsTouched: setFullNameTouched,
    isValid: fullNameIsValid,
    setValue: setFullNameValue,
    value: fullNameValue,
  } = useField(validateFullName);

  const {
    touched: dateTouched,
    setIsTouched: setDateTouched,
    isValid: dateIsValid,
    setValue: setDateValue,
    value: dateValue,
  } = useField(validateAge, parseDate(new Date().toLocaleDateString('en-US')));

  const {
    setIsTouched: setEmailTouched,
    touched: emailTouched,
    isValid: emailIsValid,
    setValue: setEmailValue,
    value: emailValue,
  } = useField(validateEmail);

  const {
    validatorState,
    value: passwordValue,
    setValue: setPasswordValue,
    isTouched: passwordIsTouched,
    setIsTouched: setPasswordIsTouched,
    isValid: passwordIsValid,
  } = usePassword();

  const stepOneCompleted = [fullNameIsValid, dateIsValid].every(
    (validator) => validator
  );
  const stepTwoCompleted = [emailIsValid, passwordIsValid].every(
    (validator) => validator
  );

  const getStepOneProgress = () => {
    let progress = 0;

    if (stepOneCompleted) progress += 50;
    if (currentStep > 1) progress += 50;

    return progress;
  };

  const getStepTwoProgress = () => {
    let progress = 0;

    if (stepTwoCompleted) progress += 50;
    if (currentStep === 3) progress += 50;

    return progress;
  };

  const formIsValid =
    fullNameIsValid && dateIsValid && emailIsValid && passwordIsValid;

  if (currentStep === 3) {
    return <h3>Registration in progress...</h3>;
  }

  if (currentStep === 4) {
    return <Success />;
  }

  return (
    <form className={styles.form}>
      <div className={styles.bars}>
        {isMobile ? (
          <>
            {currentStep === 1 ? (
              <div className={styles['bars__bar']}>
                <span>
                  <div className={styles.circle}>1</div> Step 1
                </span>
                <ProgressBar
                  completed={getStepOneProgress()}
                  isLabelVisible={false}
                  transitionDuration='0.2s'
                  height='0.5rem'
                  bgColor='#29A643'
                />
              </div>
            ) : (
              <div className={styles['bars__bar']}>
                <span>
                  <div className={styles.circle}>2</div> Step 2
                </span>
                <ProgressBar
                  completed={getStepTwoProgress()}
                  isLabelVisible={false}
                  transitionDuration='0.2s'
                  height='0.5rem'
                  bgColor='#29A643'
                />
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles['bars__bar']}>
              <span>
                <div className={styles.circle}>1</div> Step 1
              </span>
              <ProgressBar
                completed={getStepOneProgress()}
                isLabelVisible={false}
                transitionDuration='0.2s'
                height='0.5rem'
                bgColor='#29A643'
              />
            </div>

            <div className={styles['bars__bar']}>
              <span>
                <div className={styles.circle}>2</div> Step 2
              </span>
              <ProgressBar
                completed={getStepTwoProgress()}
                isLabelVisible={false}
                transitionDuration='0.2s'
                height='0.5rem'
                bgColor='#29A643'
              />
            </div>
          </>
        )}
      </div>

      {currentStep == 1 && (
        <>
          <div className={styles['form__control']}>
            <label>Full Name</label>
            <input
              onBlur={() => setFullNameTouched(true)}
              type='text'
              value={fullNameValue}
              onChange={(e) => setFullNameValue(e.target.value)}
              className={
                styles[
                  `form__input--${getCurrentClass(
                    fullNameIsValid,
                    fullNameTouched
                  )}`
                ]
              }
            />
            {!fullNameIsValid && fullNameTouched && (
              <p>Please Enter Valid Name</p>
            )}
          </div>
          <div className={styles['form__control']}>
            <label>Date of birth</label>
            <input
              onBlur={() => setDateTouched(true)}
              value={dateValue}
              type='date'
              onChange={(e) => {
                setDateValue(e.target.value);
              }}
              className={
                styles[
                  `form__input--${getCurrentClass(dateIsValid, dateTouched)}`
                ]
              }
            />
            {!dateIsValid && dateTouched && (
              <p>Minimum age requirements, 18 years old</p>
            )}
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className={styles['form__control']}>
            <label>Email</label>
            <input
              onBlur={() => setEmailTouched(true)}
              type='email'
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              className={
                styles[
                  `form__input--${getCurrentClass(emailIsValid, emailTouched)}`
                ]
              }
            />
            {!emailIsValid && emailTouched && <p>Please Enter Valid Email</p>}
          </div>
          <div className={styles['form__control']}>
            <label>Password</label>
            <input
              type='password'
              value={passwordValue}
              onBlur={() => setPasswordIsTouched(true)}
              onChange={(e) => setPasswordValue(e.target.value)}
              className={
                styles[
                  `form__input--${getCurrentClass(
                    passwordIsValid,
                    passwordIsTouched
                  )}`
                ]
              }
            />
            <ul className={styles['form__checklist']}>
              <li
                className={
                  styles[
                    `form__checklist__item--${getCurrentClass(
                      validatorState.range,
                      passwordIsTouched
                    )}`
                  ]
                }
              >
                8 - 15 characters
              </li>
              <li
                className={
                  styles[
                    `form__checklist__item--${getCurrentClass(
                      validatorState.numbersValid,
                      passwordIsTouched
                    )}`
                  ]
                }
              >
                1 or more numbers
              </li>
              <li
                className={
                  styles[
                    `form__checklist__item--${getCurrentClass(
                      validatorState.lowerCaseValid,
                      passwordIsTouched
                    )}`
                  ]
                }
              >
                1 or more lower case letters
              </li>
              <li
                className={
                  styles[
                    `form__checklist__item--${getCurrentClass(
                      validatorState.upperCaseValid,
                      passwordIsTouched
                    )}`
                  ]
                }
              >
                1 or more upper case letters
              </li>
              <li
                className={
                  styles[
                    `form__checklist__item--${getCurrentClass(
                      validatorState.specialValid,
                      passwordIsTouched
                    )}`
                  ]
                }
              >
                1 or more special characters (#[]()@$&*!?|,.^/\+_-)
              </li>
            </ul>
          </div>
        </>
      )}
      {currentStep === 1 && (
        <Button
          onClick={(e) => setCurrentStep(2)}
          title='Continue'
          disabled={!stepOneCompleted}
        />
      )}
      {currentStep === 2 && (
        <Button
          onClick={(e) => {
            handleRegister(e);
          }}
          title='REGISTER NOW'
          disabled={!formIsValid}
        />
      )}
      <p>Don’t have an account? <span className='text-red'>Create one here</span> and register for the event</p>
      <p>Terms and Conditions apply*. To read the full T&Cs, click <span className='text-red'>here</span>.</p>
    </form>
  );
};

export default Form;
