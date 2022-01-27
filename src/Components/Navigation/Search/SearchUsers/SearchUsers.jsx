import React from 'react';
import Button from '../../../../ui/Button/Button';
import { GridColumn, GridContainer, GridRow } from '../../../../ui/Grid';
import userPhoto from '../../../../images/men.png';
import styles from './styles.module.scss';

const SearchUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.search}>
      <h3>Users</h3>
      <GridContainer>
        <GridRow>
          {props.users.map((user) => {
            return (
              <div className={styles.userInfo} key={user.id}>
                <GridColumn size={2} offset={0}>
                  <div className={styles.avatar}>
                    <img
                      src={
                        user.photos.small != null
                          ? user.photos.small
                          : userPhoto
                      }
                      alt='avatar'
                      className={styles.image}
                    />
                    {user.subscribe ? (
                      <Button
                        className={styles.unsubscribeBtn}
                        onClick={() => {
                          props.toggleSubscribe(user.id);
                        }}
                      >
                        Unsubscribe
                      </Button>
                    ) : (
                      <Button
                        className={styles.subscribeBtn}
                        onClick={() => {
                          props.toggleSubscribe(user.id);
                        }}
                      >
                        Subscribe
                      </Button>
                    )}
                  </div>
                </GridColumn>
                <GridColumn size={10} offset={0}>
                  <div className={styles.usersInfo}>
                    <div className={styles.userInfoTop}>
                      <span>{`${user.name} ${user.secondName}`}</span>
                      <span>country</span>
                    </div>
                    <div className={styles.userInfoBottom}>
                      <span>Status</span>
                      <span>City</span>
                    </div>
                  </div>
                </GridColumn>
              </div>
            );
          })}
          <div className={styles.showBtn}>
            <Button className={styles.subscribeBtn}>Show More...</Button>
            <div className={styles.pageNumbers}>
              {pages.map((page) => {
                return (
                  <Button
                    key={page}
                    className={
                      props.currentPage === page && styles.selectedPage
                    }
                    onClick={() => {
                      props.onPageChanged(page);
                    }}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
          </div>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default SearchUsers;
