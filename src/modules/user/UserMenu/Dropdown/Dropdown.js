import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.scss';

const Dropdown = ({ username }) => (
  <div className={s.container}>
    <div className={s.userName}>{username}</div>
    <ul className={s.list}>
      {userNavItems.map(item => (
        <li className={s.listItem} key={item.name}>
          <Link className={s.link} to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
