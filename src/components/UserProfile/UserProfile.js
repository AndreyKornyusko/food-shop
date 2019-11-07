import React from 'react';
import Button from '../Common/Button/Button';
import classes from './UserProfile.module.scss';
import { ReactComponent as Logout } from '../../assets/sign-out.svg';

const charactersMaxlimit = {
  name: 30,
};

const UserProfile = ({ user: { name }, onSignOut = () => null, avatar }) => (
  <div className={classes.container}>
    <img className={classes.image} src={avatar} alt="user avatar" />
    <span className={classes.name}>
      {name.length > charactersMaxlimit.name
        ? name.substring(0, charactersMaxlimit.name - 3) + '...'
        : name}
    </span>

    <button onClick={onSignOut} className={classes.logout}>
      <Logout className={classes.icon} />
    </button>
  </div>
);

export default UserProfile;
