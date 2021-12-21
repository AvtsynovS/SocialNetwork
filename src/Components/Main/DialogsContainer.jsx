import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs/Dialogs";
import { addMessage, updateMessageText } from "../../redux/messageReducer";

// не работает, т.к. некорректно передан state в компоненте Dialogs, см. комменты.
let mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessage());
    },

    updateMessageText: (text) => { // тут может быть ошибка
      dispatch(updateMessageText(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
