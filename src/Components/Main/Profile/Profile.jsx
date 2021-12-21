import React from "react";
// import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./styles.module.scss";

const Profile = (props) => {
  return (
    <div className={styles.mainContent}>
      <ProfileInfo />
      {/* <Posts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      /> */}
      <PostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Profile;
