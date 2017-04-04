import {combineReducers} from 'redux';

import auth from './reducer_auth';
import quotes from './reducer_quotes';

// We combine the reducers here so that they
// can be left split apart above

var quotesApp = combineReducers({
    auth: auth,
    quotes: quotes
});

export default quotesApp;

//# sourceMappingURL=index-compiled.js.map
