import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AuthNav.module.scss';

const AuthNav = () => (
  <ul className={classes.nav}>
    <li>
      <NavLink
        to="/signup"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign up
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
