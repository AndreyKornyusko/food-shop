import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './dropdownNav.module.scss';

const DropdownNavigation = ({ items = [], handleClick }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.listItem} key={item.name}>
        <NavLink to={item.path} className={styles.link} onClick={handleClick}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default DropdownNavigation;
