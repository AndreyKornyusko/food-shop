import React from 'react';
import s from './Avatar.module.scss';

const Avatar = ({ image = '' }) => (
  <img className={s.avatar} src={image} alt="user avatar" />
);

export default Avatar;
