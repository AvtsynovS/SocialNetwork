import React from 'react';
import styles from './styles.module.scss';
import { GridColumn, GridRow, GridContainer } from './ui/Grid';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/Main/News/News';
import Music from './Components/Main/Music/Music';
import Setting from './Components/Main/Setting/Setting';
import { Route, Switch } from 'react-router';
import NotFound from './Components/Main/NotFound/NotFound';
import DialogsContainer from './Components/Main/Dialogs/DialogsContainer';
import Search from './Components/Navigation/Search/Search';
import ProfileContainer from './Components/Main/Profile/ProfileContainer';
import SingInPage from './Components/Main/SingInPage/SingInPage';
import RegistrationPage from './Components/Main/RegistrationPage/RegistrationPage';
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {
  // if ((<SingInPage />)) {
  //   return (
  //     <div className={styles.container}>
  //       <GridContainer>
  //         <GridRow>
  //           <GridColumn size={12} offset={0}>
  //             <Header theme={props.state.theme} dispatch={props.dispatch} />
  //           </GridColumn>
  //         </GridRow>
  //         <GridRow>
  //           <GridColumn size={10}>
  //             <Switch>
  //               <Route exact path='/' render={() => <ProfileContainer />} />
  //               <Route
  //                 path='/profile/:userId?'
  //                 render={() => <ProfileContainer />}
  //               />
  //               <Route path='/dialogs' render={() => <DialogsContainer />} />
  //               <Route path='/news' component={News} />
  //               <Route path='/music' component={Music} />
  //               <Route path='/setting' component={Setting} />
  //               <Route path='/search' render={() => <Search />} />
  //               <Route
  //                 path='/registration'
  //                 render={() => <RegistrationPage />}
  //               />
  //               <Route path='/singin' render={() => <SingInPage />} />
  //               <Route path='*' component={NotFound} />
  //             </Switch>
  //           </GridColumn>
  //         </GridRow>
  //       </GridContainer>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.container}>
      <GridContainer>
        <GridRow>
          <GridColumn size={12} offset={0}>
            <HeaderContainer />
            {/* <Header theme={props.state.theme} dispatch={props.dispatch} /> */}
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={2}>
            <Navigation />
          </GridColumn>
          <GridColumn size={10}>
            <Switch>
              <Route exact path='/' render={() => <ProfileContainer />} />
              <Route
                path='/profile/:userId?'
                render={() => <ProfileContainer />}
              />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
              <Route path='/search' render={() => <Search />} />
              <Route path='/registration' render={() => <RegistrationPage />} />
              <Route path='/singin' render={() => <SingInPage />} />
              <Route path='*' component={NotFound} />
            </Switch>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default App;
