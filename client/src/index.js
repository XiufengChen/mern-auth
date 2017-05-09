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
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/pages/home';
import About from './components/pages/about';
import Students from './components/pages/students';
import Startups from './components/pages/startups';
import Sponsors from './components/pages/sponsors';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

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
        <Route path='signout' component={Signout} />
        <Route path='signup' component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.root'));
