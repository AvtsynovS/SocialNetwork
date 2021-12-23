import { connect } from "react-redux";
import FriendsBoard from "./FriendsBoard";

let mapStateToProps = (state) => {
  return {
    users: state.navigation.users,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const FriendsBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsBoard);

export default FriendsBoardContainer;
