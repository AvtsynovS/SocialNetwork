import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleSubscribe,
  toggleLoader,
} from '../../../../redux/searchReducer';
import SearchUsers from './SearchUsers';
import Loader from '../../../Common/Loader/Loader';

class SearchUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleLoader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.toggleLoader(true);
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleLoader(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isLoader ? <Loader /> : null}
        <SearchUsers
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          toggleSubscribe={this.props.toggleSubscribe}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.search.users,
    pageSize: state.search.pageSize,
    totalUsersCount: state.search.totalUsersCount,
    currentPage: state.search.currentPage,
    isLoader: state.search.isLoader,
  };
};

const SearchContainer = connect(mapStateToProps, {
  toggleSubscribe,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoader,
})(SearchUsersContainer);

export default SearchContainer;
