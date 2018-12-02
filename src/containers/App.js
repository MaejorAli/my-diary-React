import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import '../styles/styles.scss';
import Signin from './Signin';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/auth/signin" component={Signin} />
    </div>
  </BrowserRouter>
);

export default App;
