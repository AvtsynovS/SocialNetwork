import React from "react";
import { addPost, updatePostText } from "../../../../redux/profileReducer";
import Post from "./Post/Post";
import styles from "./styles.module.scss";

// добавить валидацию textarea

const Posts = (props) => {
  let addNewPost = (event) => {
    props.dispatch(addPost());
    event.target.blur();
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(updatePostText(text));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.dispatch(addPost());
    }
  };

  return (
    <div className={styles.postArea}>
      <h3>New post</h3>
      <div>
        <div>
          <textarea
            placeholder="enter you post..."
            onChange={onPostChange}
            value={props.newPostText}
            onKeyDown={onKeyDown}
          />
        </div>
        <div>
          <button id="btn" onClick={addNewPost}>
            Add post
          </button>
        </div>
      </div>
      {props.posts.map((item) => (
        <div key={item.id}>
          <Post message={item.message} likesCount={item.likesCount} />
        </div>
      ))}
      ;
    </div>
  );
};

export default Posts;
