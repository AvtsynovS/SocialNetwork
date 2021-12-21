import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

const oldStore = {
  _state: {
    users: [
      {
        id: 1,
        name: "Alex",
        secondName: "Megos",
        avatar:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
      },
      {
        id: 2,
        name: "Ann",
        secondName: "Willson",
        avatar:
          "https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg",
      },
      {
        id: 3,
        name: "Jack",
        secondName: "London",
        avatar:
          "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg",
      },
      {
        id: 4,
        name: "Thomas",
        secondName: "Katcher",
        avatar:
          "https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_960_720.jpg",
      },
      {
        id: 5,
        name: "Jessica",
        secondName: "Phils",
        avatar:
          "https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg",
      },
      {
        id: 6,
        name: "Mia",
        secondName: "Li",
        avatar:
          "https://cdn.pixabay.com/photo/2015/03/26/09/39/woman-690034_960_720.jpg",
      },
    ],
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How are you?", likesCount: 8 },
        { id: 2, message: "I`m fine, thank you.", likesCount: 19 },
      ],
      newPostText: "",
    },
    messagesPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I`m fine, thank you." },
        { id: 4, message: "Hello" },
        { id: 5, message: "Hi there" },
        { id: 6, message: "Good morning" },
      ],
      newMessageText: "",
    },
  },

  getState() {
    return this._state;
  },

  _subscriber() {
    console.log("state not change");
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);

    this._subscriber(this._state);
  },
};

export default oldStore;
