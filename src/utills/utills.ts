import React from 'react';

export const convertTimestampToDate = (timestamp: string): string => {
  const date = Date.parse(timestamp);
  const dateCopy = new Date(date);
  const day = dateCopy.getDate();
  const month = dateCopy.getMonth();
  const year = dateCopy.getFullYear();

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return `${day} ${months[month]} ${year}г.`;
};

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const scrollFunction = (btnRef: React.MutableRefObject<HTMLButtonElement | null>): void => {
  if (btnRef.current) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnRef.current.style.display = 'block';
    } else {
      btnRef.current.style.display = 'none';
    }
  }
};

export const scrollOnTop = (): void => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
