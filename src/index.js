import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'babel-polyfill';
import Root from './root';

// const Index = () => <div>Hello React!</div>;

ReactDOM.render(
  <Root>
    <App />
  </Root>, document.getElementById('root'),
);
