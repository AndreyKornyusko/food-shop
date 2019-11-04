import React from 'react';
import styles from './ResetButton.module.scss';

const MenuSelectFormReset = ({ categor, Submit }) => (
  <>
    <button className={styles.button} type="button" onClick={Submit}>
      Очистить фильтр
    </button>
    <p className={styles.filter}> Текущий фильтр: {categor} </p>
  </>
);

export default MenuSelectFormReset;
