import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleSubscribe,
} from '../../../../redux/searchReducer';
import SearchUsers from './SearchUsers';

class SearchUsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <SearchUsers
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        toggleSubscribe={this.props.toggleSubscribe}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.search.users,
    pageSize: state.search.pageSize,
    totalUsersCount: state.search.totalUsersCount,
    currentPage: state.search.currentPage,
  };
};

const SearchContainer = connect(mapStateToProps, {
  toggleSubscribe,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
})(SearchUsersContainer);

export default SearchContainer;
