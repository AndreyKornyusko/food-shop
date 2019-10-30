import React from 'react';
import { Link } from 'react-router-dom';
import s from './cartIcon.module.scss';
const CartIcon = ({ amount }) => (
  <div className={s.container}>
    <Link to="/cart">
      <img
        className={s.cart}
        src="https://image.flaticon.com/icons/svg/263/263142.svg"
        width="35"
        alt=""
      />
      <span className={s.amount}>{amount}</span>
    </Link>
  </div>
);

export default CartIcon;
