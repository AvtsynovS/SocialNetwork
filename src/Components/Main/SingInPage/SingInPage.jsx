import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './styles.module.scss';

const SingInPage = () => {
  return (
    <div className={styles.container}>
      <form action=''>
        <div className={styles.singInForm}>
          <input type='text' placeholder='Enter your login' />
          <input type='password' placeholder='Enter your password' />
          <button className={styles.singInButton}>Sing In</button>
          <NavLink to={'/registration'}>
            <button className={styles.singInButton}>Registration</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SingInPage;
