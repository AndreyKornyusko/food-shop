import React from 'react';
import classes from './Label.module.scss';

const Label = ({ text, children }) => (
  <label className={classes.label}>
    <span className={classes.text}>{text}</span>
    {children}
  </label>
);

export default Label;
