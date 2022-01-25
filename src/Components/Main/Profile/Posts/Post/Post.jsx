import React from 'react';
import styles from './styles.module.scss';
import like from './../../../../../icons/like.ico';

const Post = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <img
          className={styles.avatar}
          src='https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg'
          alt='avatar'
        />
        {props.message}
      </div>
      <div className={styles.likes}>
        <img className={styles.likeIcon} src={like} alt='like' />
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
