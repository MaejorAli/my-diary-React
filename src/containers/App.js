import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import '../styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </BrowserRouter>
);

export default App;
