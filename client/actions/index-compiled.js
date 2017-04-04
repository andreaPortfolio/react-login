var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }

    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

// actions.js

// There are three possible states for our login
// process and we need actions for each of them
export var LOGIN_REQUEST = 'LOGIN_REQUEST';
export var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export var LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds: creds
    };
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    };
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message: message
    };
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export var LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {

    var config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'username=' + creds.username + '&password=' + creds.password
    };

    return function (dispatch) {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds));
        return fetch('http://localhost:3001/sessions/create', config).then(function (response) {
            return response.json().then(function (user) {
                return {user: user, response: response};
            });
        }).then(function (_ref) {
            var user = _ref.user,
                response = _ref.response;

            if (!response.ok) {
                // If there was a problem, we want to
                // dispatch the error condition
                dispatch(loginError(user.message));
                return Promise.reject(user);
            } else {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', user.id_token);

                // Dispatch the success action
                dispatch(receiveLogin(user));
            }
        }).catch(function (err) {
            return console.log("Error: ", err);
        });
    };
}

// Logs the user out
export function logoutUser() {
    return function (dispatch) {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout());
    };
}
//We also have actions for retreiving the quotes that uses an API middleware.

// middleware/api.js

var BASE_URL = 'http://localhost:3001/api/';

function callApi(endpoint, authenticated) {

    var token = localStorage.getItem('id_token') || null;
    var config = {};

    if (authenticated) {
        if (token) {
            config = {
                headers: {'Authorization': 'Bearer ' + token}
            };
        } else {
            throw "No token saved!";
        }
    }

    return fetch(BASE_URL + endpoint, config).then(function (response) {
        return response.text().then(function (text) {
            return {text: text, response: response};
        });
    }).then(function (_ref2) {
        var text = _ref2.text,
            response = _ref2.response;

        if (!response.ok) {
            return Promise.reject(text);
        }

        return text;
    }).catch(function (err) {
        return console.log(err);
    });
}

export var CALL_API = Symbol('Call API');

export default (function (store) {
    return function (next) {
        return function (action) {

            var callAPI = action[CALL_API];

            // So the middleware doesn't get applied to every single action
            if (typeof callAPI === 'undefined') {
                return next(action);
            }

            var endpoint = callAPI.endpoint,
                types = callAPI.types,
                authenticated = callAPI.authenticated;

            var _types = _slicedToArray(types, 3),
                requestType = _types[0],
                successType = _types[1],
                errorType = _types[2];

            // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes


            return callApi(endpoint, authenticated).then(function (response) {
                return next({
                    response: response,
                    authenticated: authenticated,
                    type: successType
                });
            }, function (error) {
                return next({
                    error: error.message || 'There was an error.',
                    type: errorType
                });
            });
        };
    };
});
// actions.js

// Uses the API middlware to get a quote
export function fetchQuote() {
    return _defineProperty({}, CALL_API, {
        endpoint: 'random-quote',
        types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE]
    });
}

// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
export function fetchSecretQuote() {
    return _defineProperty({}, CALL_API, {
        endpoint: 'protected/random-quote',
        authenticated: true,
        types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE]
    });
}

//# sourceMappingURL=index-compiled.js.map
