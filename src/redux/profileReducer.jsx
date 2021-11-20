const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 8 },
    { id: 2, message: "I`m fine, thank you.", likesCount: 19 },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updatePostText = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
