import React from 'react';
import styles from './Logo.module.scss';

const Logo = ({ image }) => (
  <>
    <a className={styles.logo} href="https://food-shop.herokuapp.com/">
      <img className={styles.img} src={image} alt="app logo" />
    </a>
  </>
);

export default Logo;
