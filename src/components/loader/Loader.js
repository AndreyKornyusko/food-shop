import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    Loading... (Сервер на бесплатном аккаунте Heroku и может находиться в режиме
    сна в течении 30 сек после запроса.)
  </div>
);

export default Loader;
