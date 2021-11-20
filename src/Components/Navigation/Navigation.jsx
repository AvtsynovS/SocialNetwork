import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Navigation = (props) => {
 
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={styles.activeLink}>
            {" "}
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={styles.activeLink}>
            {" "}
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={styles.activeLink}>
            {" "}
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={styles.activeLink}>
            {" "}
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" activeClassName={styles.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
      <div className={styles.friends}>
        {props.friendsBoard.users.map((item) => {
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
    </div>
  );
};

export default Navigation;
