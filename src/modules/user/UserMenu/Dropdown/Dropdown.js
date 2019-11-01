import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.scss';

const Dropdown = () => (
  <div className={s.container}>
    <ul className={s.list}>
      {userNavItems.map(item => (
        <li className={s.listItem} key={item.name}>
          <Link className={s.link} to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
