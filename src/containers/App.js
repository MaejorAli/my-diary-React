import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import '../styles/styles.scss';
import Signin from './Signin';
import PublishEntry from './PublishEntry';
import UpdateEntry from './UpdateEntry';
import GetAnEntry from './GetAnEntry';
import GetEntries from './GetEntries';
import Dashboard from '../views/Dashboard';
import Profile from './Profile';
import SignOut from './Signout';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/auth/signin" component={Signin} />
        <Route path="/entries/create" component={PublishEntry} />
        <Route exact path="/entries/update/:entryId" component={UpdateEntry} />
        <Route exact path="/entries/:entryId" component={GetAnEntry} />
        <Route exact path="/entries" component={GetEntries} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signout" component={SignOut} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
