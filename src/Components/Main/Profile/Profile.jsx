import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './styles.module.scss';

const Profile = (props) => {
  return (
    <div className={styles.mainContent}>
      <ProfileInfo profile={props.profile} />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
