import React from "react";
import { NavLink } from "react-router-dom";
import FriendsBoardContainer from "./FriendsBoard/FriendsBoardContainer";
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
          <NavLink to="/dialogs"> Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news"> News</NavLink>
        </li>
        <li>
          <NavLink to="/music"> Music</NavLink>
        </li>
        <li>
          <NavLink to="/setting">Settings</NavLink>
        </li>
      </ul>
      <FriendsBoardContainer store={props.store} />
    </div>
  );
};

export default Navigation;
