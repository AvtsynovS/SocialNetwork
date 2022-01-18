import { connect } from 'react-redux';
import { setUsers, toggleSubscribe } from '../../../redux/searchReducer';
import SearchUsers from './SearchUsers';

let mapStateToProps = (state) => {
  return {
    users: state.search.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleSubscribe: (userId) => {
      dispatch(toggleSubscribe(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUsers);

export default SearchContainer;
