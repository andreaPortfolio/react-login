import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Route} from 'react-router-dom'
import 'grommet/scss/vanilla/index.scss';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk'
import App from 'containers/App';
import MainPage from 'containers/MainPage';
import SignIn from 'containers/Auth/signin';
import SignOut from 'containers/Auth/signout.jsx';
import SignUp from 'containers/Auth/signup.jsx';
import RequiredAuth from 'containers/Auth/required_auth';
import ProtectArea from 'components/protectArea.jsx';


import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

/*const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
 const createStoreWithMiddleware = createStore(
 compose(
 routerMiddleware(history),
 applyMiddleware(reduxThunk)
 )
 );*/


const store = createStore(
    combineReducers({
        reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware),
    applyMiddleware(reduxThunk)
);

//import 'index.html';


ReactDOM.render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={MainPage}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signout" component={SignOut}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/protectarea" component={RequiredAuth(ProtectArea)}/>


            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);



