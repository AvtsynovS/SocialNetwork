import React from "react";
import styles from "./styles.module.scss";

const FriendsBoard = (props) => {
  console.log(props);
  return (
    <div className={styles.friends}>
      {props.users.map((item) => {
        return (
          <div className={styles.avatar} key={item.id}>
            <div>
              <img className={styles.image} src={item.avatar} alt="avatar" />
            </div>
            <div className={styles.friendName}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsBoard;
