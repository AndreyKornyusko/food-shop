import React from 'react';
import styles from './Comments.module.scss';

const CommentsList = ({ notes }) => (
  <ul className={styles.list}>
    {notes.map(({ id, text }) => (
      <li className={styles.item} key={id}>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

export default CommentsList;
