const SET_USERS = 'SET_USERS';
const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SHOW_MORE = 'SHOW_MORE';
const SET_CURRENT_PAGE = ' SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isLoader: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, subscribe: !user.subscribe };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: action.isLoader,
      };
    default:
      return state;
  }
};

export const toggleSubscribe = (userId) => ({ type: TOGGLE_SUBSCRIBE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleLoader = (isLoader) => ({ type: TOGGLE_LOADER, isLoader });
export const showMore = () => ({ type: SHOW_MORE });

export default searchReducer;
