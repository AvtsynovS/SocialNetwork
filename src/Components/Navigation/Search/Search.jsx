import React from 'react';
import Button from '../../../ui/Button/Button';
import { GridColumn, GridContainer, GridRow } from '../../../ui/Grid';
import styles from './styles.module.scss';

const Search = (props) => {
  return (
    <div className={styles.search}>
      <h3>Users</h3>
      <GridContainer>
        <GridRow>
          {props.users.map((user) => {
            return (
              <div className={styles.userInfo} key={user.id}>
                <GridColumn size={1} offset={0}>
                  <div className={styles.avatar}>
                    <img
                      src={user.avatar}
                      alt='avatar'
                      className={styles.image}
                    />
                    {user.subscribe ? (
                      <Button
                        className={styles.UnsubscribeBtn}
                        onClick={() => {
                          props.toggleSubscribe(user.id);
                        }}
                      >
                        Unsubscribe
                      </Button>
                    ) : (
                      <Button
                        className={styles.SubscribeBtn}
                        onClick={() => {
                          props.toggleSubscribe(user.id);
                        }}
                      >
                        Subscribe
                      </Button>
                    )}
                  </div>
                </GridColumn>
                <GridColumn size={11} offset={0}>
                  <div className={styles.usersInfo}>
                    <div>
                      <span>{`${user.name} ${user.secondName}`}</span>
                      <span>country</span>
                    </div>
                    <div>
                      <span>Status</span>
                      <span>City</span>
                    </div>
                  </div>
                </GridColumn>
              </div>
            );
          })}
        </GridRow>
      </GridContainer>
      <div className={styles.showBtn}>
        <Button>Show More...</Button>
      </div>
    </div>
  );
};

export default Search;
