import React from "react";
import styles from "./styles.module.scss";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.avatar}
        src="https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
        alt="avatar"
      />
      {props.message}
      <br />
      <span>Likes: {props.likesCount} </span>
    </div>
  );
};

export default Post;
