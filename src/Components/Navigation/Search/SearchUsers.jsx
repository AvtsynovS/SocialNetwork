import React from 'react';
import axios from 'axios';
import Button from '../../../ui/Button/Button';
import { GridColumn, GridContainer, GridRow } from '../../../ui/Grid';
import userPhoto from '../../../images/men.png';
import styles from './styles.module.scss';

class SearchUsers extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={styles.search}>
        <h3>Users</h3>
        <GridContainer>
          <GridRow>
            {this.props.users.map((user) => {
              return (
                <div className={styles.userInfo} key={user.id}>
                  <GridColumn size={1} offset={0}>
                    <div className={styles.avatar}>
                      <img
                        // src={user.avatar}
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
                          className={styles.UnsubscribeBtn}
                          onClick={() => {
                            this.props.toggleSubscribe(user.id);
                          }}
                        >
                          Unsubscribe
                        </Button>
                      ) : (
                        <Button
                          className={styles.SubscribeBtn}
                          onClick={() => {
                            this.props.toggleSubscribe(user.id);
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
  }
}

export default SearchUsers;
