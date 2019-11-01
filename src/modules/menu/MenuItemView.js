import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItemView = ({
  id,
  name,
  image,
  price,
  description,
  ingredients,
  goBackToMenu,
  children,
}) => (
  <div className={styles.wrapper}>
    <button className={styles.button} type="button" onClick={goBackToMenu}>
      Назад к меню
    </button>
    <div className={styles.imgWrap}>
      <img className={styles.img} src={image} alt={name} />
    </div>
    <div className={styles.textWrap}>
      <p className={styles.name}>
        {' '}
        <span className={styles.boldText}>Имя:</span> {name}
      </p>
      <p className={styles.description}>
        {' '}
        <span className={styles.boldText}>Описание:</span> {description}
      </p>
      <p className={styles.ingredients}>
        {' '}
        <span className={styles.boldText}>Ингридиенты:</span> {ingredients}
      </p>
      <p className={styles.price}>
        {' '}
        <span className={styles.boldText}>Цена:</span> {price}грн
      </p>
    </div>
    {children}
  </div>
);

export default MenuItemView;
