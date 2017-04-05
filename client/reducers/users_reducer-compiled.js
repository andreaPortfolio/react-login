var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

import {FETCH_USERS} from '../actions/types';

export default function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case FETCH_USERS:
            return _extends({}, state, {usersList: payload});

    }

    return state;
}

//# sourceMappingURL=users_reducer-compiled.js.map