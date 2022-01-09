import { connect } from 'react-redux';
import Search from './Search';

let mapStateToProps = (state) => {
  return {
    users: state.search.users,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
