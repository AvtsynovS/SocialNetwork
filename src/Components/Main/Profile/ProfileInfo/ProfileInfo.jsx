import React from "react";
import styles from "./styles.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.mainPicture}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
