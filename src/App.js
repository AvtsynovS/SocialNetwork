import React from 'react';
import styles from './styles.module.scss';
import { GridColumn, GridRow, GridContainer } from './ui/Grid';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Main/Profile/Profile';
import News from './Components/Main/News/News';
import Music from './Components/Main/Music/Music';
import Setting from './Components/Main/Setting/Setting';
import { Route, Switch } from 'react-router';
import NotFound from './Components/Main/NotFound/NotFound';
import DialogsContainer from './Components/Main/Dialogs/DialogsContainer';
import SearchContainer from './Components/Navigation/Search/SearchContainer';

const App = (props) => {
  return (
    <div className={styles.container}>
      <GridContainer>
        <GridRow>
          <GridColumn size={12} offset={0}>
            <Header theme={props.state.theme} dispatch={props.dispatch} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={2}>
            <Navigation />
          </GridColumn>
          <GridColumn size={10}>
            <Switch>
              <Route exact path='/' render={() => <Profile />} />
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
              <Route path='/search' render={() => <SearchContainer />} />
              <Route path='*' component={NotFound} />
            </Switch>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default App;
