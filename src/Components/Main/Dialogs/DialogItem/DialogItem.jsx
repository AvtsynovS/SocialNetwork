import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}> {`${props.name} ${props.secondName}`} </NavLink>
    </div>
  );
};

export default DialogItem;
