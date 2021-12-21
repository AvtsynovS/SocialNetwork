import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

let rerenderTree = () => {
  // let rerenderTree = (state)*
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
          // store={store}
          // state={state}*
          // state={store.getState()}
          // dispatch={store.dispatch.bind(store)}
          />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState);
// rerenderTree(store.getState());*
store.subscribe(rerenderTree);
// store.subscribe( () => {*
//   let state = store.getState()*
//   rerenderTree(state);*
// });*

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
