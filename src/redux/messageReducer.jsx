const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I`m fine, thank you." },
    { id: 4, message: "Hello" },
    { id: 5, message: "Hi there" },
    { id: 6, message: "Good morning" },
  ],
  newMessageText: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      }
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      }
    default:
      return state;
  }
};

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateMessageText = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newMessageText: text,
});

export default messageReducer;
