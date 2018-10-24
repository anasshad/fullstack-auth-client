import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Login from './components/Login';
import Profile from './components/Profile';
import Token from './components/token';
import TopMenuHOC from './components/TopMenu_HOC'

import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import {Route, Switch} from 'react-router';

import Saga from './sagas';
import rootReducer from './reducers';

//create middlewares
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

//create store
const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    {
        token: localStorage.getItem('token')
    },
    compose(
      applyMiddleware(
          
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
        logger,
      ),
    ),
  )

const AppWithHeader = TopMenuHOC(App);

//run saga middleware
sagaMiddleware.run(Saga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" render={props => <AppWithHeader {...props} />}/>
                    <Route path="/login" component={TopMenuHOC(Login)}/>
                    <Route path="/profile" component={TopMenuHOC(Profile)}/>
                    <Route path="/token/:token" component={Token}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
