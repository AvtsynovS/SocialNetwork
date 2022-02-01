import React from 'react';
import styles from './styles.module.scss';
import Loader from '../../../Common/Loader/Loader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <img
          className={styles.mainPicture}
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='img'
        />
      </div>
      <div>{props.profile.fullName}</div>
    </div>
  );
};

export default ProfileInfo;
