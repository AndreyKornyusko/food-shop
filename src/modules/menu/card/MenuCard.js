import React from 'react';
import styles from './MenuCard.module.scss';

const MenuCard = ({ name, image, price }) => (
  <div className={styles.wrapper}>
    <div className={styles.imgWrap}>
      <img className={styles.img} src={image} alt={name} />
    </div>
    <p className={styles.name}>{name}</p>
    <p>
      Цена: <span className={styles.price}>{price}грн </span>{' '}
    </p>
  </div>
);

export default MenuCard;
