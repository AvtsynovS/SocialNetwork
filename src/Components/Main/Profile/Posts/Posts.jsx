import React from 'react';
import Button from '../../../../ui/Button/Button';
import Post from './Post/Post';
import styles from './styles.module.scss';

// добавить валидацию textarea

const Posts = (props) => {
  let addNewPost = (event) => {
    props.addPost();
    event.target.blur();
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updatePostText(text);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.addPost();
    }
  };

  return (
    <div className={styles.postArea}>
      <h3>New post</h3>
      <div className={styles.addPost}>
        <textarea
          className={styles.sendArea}
          placeholder='enter you post...'
          onChange={onPostChange}
          value={props.newPostText}
          onKeyDown={onKeyDown}
        />
        <Button className={styles.btn} onClick={addNewPost}>
          Add post
        </Button>
      </div>
      {props.posts.map((item) => (
        <div key={item.id}>
          <Post message={item.message} likesCount={item.likesCount} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
