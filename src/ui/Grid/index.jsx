import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const GridContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const GridRow = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export const GridColumn = ({ children, size, offset }) => {
  return (
    <div
      className={clsx(styles.column, {
        [styles[`size-${size}`]]: true,
        [styles[`offset-${offset}`]]: true,
      })}
    >
      {children}
    </div>
  );
};
