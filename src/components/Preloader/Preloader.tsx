import React from 'react';
import style from './Preloader.module.css';
import loader from './../../assets/images/preloader.svg';

const Preloader = () => {
  return (
    <div className={style.wrapper}>
    <img className={style.image} src={loader} alt={'loader...'}/>
  </div>
  );
};

export default Preloader;