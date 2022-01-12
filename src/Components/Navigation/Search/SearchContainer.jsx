import { connect } from 'react-redux';
import { setUsers, toggleSubscribe } from '../../../redux/searchReducer';
import Search from './Search';

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

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
