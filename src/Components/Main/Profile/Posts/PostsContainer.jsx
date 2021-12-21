import React from "react";
import { connect } from "react-redux";
import { addPost, updatePostText } from "../../../../redux/profileReducer";
// import StoreContext from "../../../../storeContext";
import Posts from "./Posts";

// const PostsContainer = () => {
//   // const onKeyDown = (event) => {
//   //   if (event.keyCode === 13) {
//   //     // props.addPost();
//   //     props.dispatch(addPost());
//   //   }
//   // };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         // let state = store.getState();

//         let addNewPost = (event) => {
//           store.dispatch(addPost());
//           event.target.blur();
//         };

//         let onPostChange = (text) => {
//           store.dispatch(updatePostText(text));
//         };

//         return (
//           <Posts
//             addPost={addNewPost}
//             updatePostText={onPostChange}
//             posts={store.getState().posts}
//             newPostText={store.getState().profilePage.newPostText}
//             // posts={state.profilePage.posts}
//             // newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return (
    {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
    }
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
    {
      // addPost: (event) => { проверить работоспособность!!!
      //   dispatch(addPost());
      //   event.target.blur();
      // },
      addPost: () => {
        dispatch(addPost());
      },
      updatePostText: (text) => {
        dispatch(updatePostText(text));
      },
    }
  )
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
