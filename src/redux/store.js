import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";



let reducers = combineReducers({
  messagePage: messageReducer,
  profilePage: profileReducer,
  navigation: navigationReducer,
});

let store = createStore(reducers);

export default store;
