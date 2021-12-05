import React from "react";
import styles from "./styles.module.scss";
import { GridColumn, GridRow, GridContainer } from "./ui/Grid";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Main/Profile/Profile";
import Dialogs from "./Components/Main/Dialogs/Dialogs";
import News from "./Components/Main/News/News";
import Music from "./Components/Main/Music/Music";
import Setting from "./Components/Main/Setting/Setting";
import { Route, Switch } from "react-router";
import NotFound from "./Components/Main/NotFound/NotFound";

const App = (props) => {
  return (
    <div className={styles.container}>
      <GridContainer>
        <GridRow>
          <GridColumn size={12} offset={0}>
            <Header
            theme={props.state.theme}
            dispatch={props.dispatch}
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={2}>
            <Navigation friendsBoard={props.state.navigation} />
          </GridColumn>
          <GridColumn size={10}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route
                path="/profile"
                render={() => (
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <Dialogs
                    //navigation={props.state.navigation}
                    //messagePage={props.state.messagePage} === undefined
                    state={props.state}
                    dispatch={props.dispatch}
                    // ПОДУМАТЬ КАК ПРАВИЛЬНО ПЕРЕДАТЬ?!!!!
                    // users={props.state.users}
                    // messagesPage={props.state.messagesPage}
                  />
                )}
              />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/setting" component={Setting} />
              <Route path="*" component={NotFound} />
            </Switch>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default App;
