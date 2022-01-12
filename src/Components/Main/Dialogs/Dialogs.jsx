import React from 'react';
import { GridColumn, GridContainer, GridRow } from '../../../ui/Grid';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './styles.module.scss';

//User not found... - реализовать.
// добавить валидацию textarea

const Dialogs = (props) => {
  const addNewMessage = (event) => {
    props.addMessage();
    event.target.blur();
  };

  const onChangeMessage = (event) => {
    let text = event.target.value;
    props.updateMessageText(text);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.addMessage();
    }
  };

  return (
    <div className={styles.dialogs}>
      <GridContainer>
        <GridRow>
          <GridColumn size={3}>
            <div className={styles.dialogsItems}>
              {props.users.map((item) => {
                return (
                  <div className={styles.userInfo} key={item.id}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.image}
                        src={item.avatar}
                        alt='avatar'
                      />
                    </div>
                    <DialogItem
                      name={item.name}
                      secondName={item.secondName}
                      id={item.id}
                    />
                  </div>
                );
              })}
            </div>
          </GridColumn>
          <GridColumn size={9}>
            <div className={styles.chat}>
              <div className={styles.messages}>
                {props.messages.map((item) => (
                  <div key={item.id}>
                    <Message message={item.message} />
                  </div>
                ))}
              </div>
              <div className={styles.addMessage}>
                <textarea
                  placeholder='enter you message...'
                  className={styles.sendArea}
                  onChange={onChangeMessage}
                  value={props.newMessageText}
                  onKeyDown={onKeyDown}
                ></textarea>
                <button className={styles.sendBtn} onClick={addNewMessage}>
                  send
                </button>
              </div>
            </div>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default Dialogs;
