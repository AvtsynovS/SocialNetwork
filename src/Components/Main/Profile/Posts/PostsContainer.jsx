import { connect } from "react-redux";
import { addPost, updatePostText } from "../../../../redux/profileReducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    updatePostText: (text) => {
      dispatch(updatePostText(text));
    },
    onKeyDown: (event) => {
      if (event.keyCode === 13) {
        dispatch(addPost());
      }
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
