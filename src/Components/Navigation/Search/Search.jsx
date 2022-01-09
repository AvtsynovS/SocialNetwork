import React from 'react';
import { GridColumn, GridContainer, GridRow } from '../../../ui/Grid';
import styles from './styles.module.scss';

const Search = (props) => {
  return (
    <div className={styles.search}>
      <h3>Users</h3>
      <GridContainer>
        <GridRow>
          <GridColumn size={2} offset={0}>
            {props.users.map((item) => {
              return (
                <div className={styles.avatar} key={item.id}>
                  <img
                    src={item.avatar}
                    alt='avatar'
                    className={styles.image}
                  />
                  <button>subscribe</button>
                </div>
              );
            })}
          </GridColumn>
          <GridColumn size={10} offset={0}>
            {props.users.map((item) => {
              return (
                <div className={styles.usersInfo}>
                  <div>
                    <span>{`${item.name} ${item.secondName}`}</span>
                    <span>country</span>
                  </div>
                  <div>
                    <span>Status</span>
                    <span>City</span>
                  </div>
                </div>
              );
            })}
          </GridColumn>
        </GridRow>
      </GridContainer>
      {/* <ul className={styles.searchMenu}>
      <li>Users</li>
      <li>Music</li>
      <li>News</li>
    </ul> 
    
    верстку переделать!
    <div className={mainScreen}>
      <div className={user}>
        <div className="userAva"></div>
        <div className="userInfo"></div>
      </div>
    </div>
    
    */}
    </div>
  );
};

export default Search;
