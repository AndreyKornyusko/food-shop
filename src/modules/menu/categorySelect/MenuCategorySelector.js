import React from 'react';

import styles from './CategorySelect.module.scss';

const MenuCategorySelectForm = ({
  options,
  value,
  onChange,
  children,
  Submit,
  categor,
}) => (
  <div className={styles.wrap}>
    <div className={styles.selectWrap}>
      <span className={styles.category}>Categories</span>
      <select
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => (
          <option className={styles.options} key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
    {children}
  </div>
);

export default MenuCategorySelectForm;
