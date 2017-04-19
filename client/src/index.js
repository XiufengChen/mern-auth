import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from './components/app';
import Home from './components/pages/home';
import About from './components/pages/about';
import Students from './components/pages/students';
import Startups from './components/pages/startups';
import Sponsors from './components/pages/sponsors';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // Provider can communicate with connected components
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path='about' component={About} />
        <Route path='students' component={Students} />
        <Route path='startups' component={Startups} />
        <Route path='sponsors' component={Sponsors} />
        <Route path='signin' component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.root'));
