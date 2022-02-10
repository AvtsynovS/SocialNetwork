import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {
//   setCurrentPage,
//   setUsers,
//   setTotalUsersCount,
//   toggleSubscribe,
//   toggleLoader,
// } from '../../../../redux/searchReducer';
// import SearchUsers from './SearchUsers';
import Header from './Header';
import Loader from '../Common/Loader/Loader';

class HeaderContainer extends React.Component {

  // #### поискать в интернете, что такое withCredentials - это общепринятое понятие, или локальное???

  componentDidMount() {
    // this.props.toggleLoader(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        // debugger;
      });
  }

  // onPageChanged = (currentPage) => {
  //   this.props.toggleLoader(true);
  //   this.props.setCurrentPage(currentPage);
  //   axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
  //     )
  //     .then((response) => {
  //       this.props.toggleLoader(false);
  //       this.props.setUsers(response.data.items);
  //     });
  // };

  render() {
    return (
      <>
        {this.props.isLoader ? <Loader /> : null}
        <Header {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    //   users: state.search.users,
    //   pageSize: state.search.pageSize,
    //   totalUsersCount: state.search.totalUsersCount,
    //   currentPage: state.search.currentPage,
    isLoader: state.auth.isLoader,
  };
};

export default connect(mapStateToProps, {
  // toggleSubscribe,
  // setUsers,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleLoader,
})(HeaderContainer);
