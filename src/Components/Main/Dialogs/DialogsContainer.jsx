import { connect } from "react-redux";
import { addMessage, updateMessageText } from "../../../redux/messageReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText,
    users: state.navigation.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessage());
    },
    updateMessageText: (text) => {
      dispatch(updateMessageText(text));
    },
    onKeyDown: (event) => {
      if (event.keyCode === 13) {
        dispatch(addMessage());
      }
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
