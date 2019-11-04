import React from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = ({ addComment, handleChange, text }) => (
  <div className={styles.wrapper}>
    <p>Комментарии</p>

    <form onSubmit={addComment}>
      <textarea
        className={styles.textarea}
        rows="5"
        cols="45"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Add your comment"
      />
      <button className={styles.button} type="submit">
        Добавить комментарий
      </button>
    </form>
  </div>
);

export default CommentForm;
