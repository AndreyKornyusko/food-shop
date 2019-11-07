import React from 'react';
import classes from './Button.module.scss';

const Button = ({ label = '', type = 'button', onClick = () => null }) => (
  <button type={type} onClick={onClick} className={classes.button}>
    {label}
  </button>
);

export default Button;
