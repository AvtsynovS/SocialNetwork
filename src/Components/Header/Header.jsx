import React from 'react';
import { GridColumn, GridContainer, GridRow } from '../../ui/Grid';
import styles from './styles.module.scss';
import earth from '../../icons/earth.ico';
// import moon from '../../icons/moon.ico';
import sun from '../../icons/sun.ico';
// import { themeMode } from '../../redux/themeReducer';
import Button from '../../ui/Button/Button';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  // const changeTheme = (event) => {
  //   const newTheme = event.target.classList;
  //   console.log(newTheme);
  //   props.dispatch(themeMode(newTheme));
  // };

  return (
    <header className={styles.header}>
      <GridContainer>
        <GridRow>
          <GridColumn size={2}>
            <div className={styles.aboutNetwork}>
              <div className={styles.networkName}>Social Network</div>
              <div className={styles.brand}>
                <img className={styles.iconBrand} src={earth} alt='brand' />
              </div>
            </div>
          </GridColumn>
          <GridColumn size={6} offset={4}>
            <div className={styles.controlPanel}>
              <div className={styles.search}>
                <form action='' className={styles.searchForm}>
                  <input
                    type='text'
                    placeholder='search...'
                    className={styles.searchInput}
                  />
                  <Button className={styles.btn}>Search...</Button>
                </form>
              </div>
              <div className={styles.avtorization}>
                <NavLink to={'/registration'}>
                  <Button className={styles.btn}>Registration</Button>
                </NavLink>
                <NavLink to={'/singin'}>
                  <Button className={styles.btn}>Sing In</Button>
                </NavLink>
              </div>
              <div className={styles.theme}>
                {/* <button onClick={changeTheme} className={styles.themeMode}> */}
                <button className={styles.themeMode}>
                  <img className={styles.iconTheme} src={sun} alt='sun' />
                </button>
              </div>
            </div>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </header>
  );
};

export default Header;
