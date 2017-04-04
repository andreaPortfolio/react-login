import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import api from './middleware/api';

import quotesApp from './reducers';

import 'grommet/scss/vanilla/index.scss';

import App from 'containers/App';
import store from 'store';

import 'index.html';

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

ReactDOM.render(React.createElement(
    Provider,
    {store: store},
    React.createElement(App, null)
), document.getElementById('root'));

//# sourceMappingURL=index-compiled.js.map
