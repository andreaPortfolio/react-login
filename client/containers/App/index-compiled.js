import _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesRedboxReactLibIndexJs from '/Users/andrea.moschella/WebstormProjects/loopback-login/react/node_modules/redbox-react/lib/index.js';
import _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformCatchErrorsLibIndexJs from '/Users/andrea.moschella/WebstormProjects/loopback-login/react/node_modules/react-transform-catch-errors/lib/index.js';
import _react from 'react';
import _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformHmrLibIndexJs from '/Users/andrea.moschella/WebstormProjects/loopback-login/react/node_modules/react-transform-hmr/lib/index.js';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _class, _temp;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _components = {
    App: {
        displayName: 'App'
    }
};

var _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformHmrLibIndexJs2 = _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformHmrLibIndexJs({
    filename: '/Users/andrea.moschella/WebstormProjects/loopback-login/react/client/containers/App/index.js',
    components: _components,
    locals: [module],
    imports: [_react]
});

var _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: '/Users/andrea.moschella/WebstormProjects/loopback-login/react/client/containers/App/index.js',
    components: _components,
    locals: [],
    imports: [_react, _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesRedboxReactLibIndexJs]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformHmrLibIndexJs2(_UsersAndreaMoschellaWebstormProjectsLoopbackLoginReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AppActions from 'actions';
import Login from '../Login/Login';
import AppGrommet from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Columns from 'grommet/components/Columns';

var App = _wrapComponent('App')((_temp = _class = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                AppGrommet,
                {centered: false},
                React.createElement(
                    Header,
                    {
                        direction: 'row', justify: 'between', size: 'large',
                        pad: {horizontal: 'medium'}
                    },
                    React.createElement(
                        Title,
                        null,
                        'game login'
                    )
                ),
                React.createElement(
                    Columns,
                    {
                        masonry: true,
                        size: 'medium',
                        justify: 'center'
                    },
                    React.createElement(Login, null)
                ),
                React.createElement(
                    Footer,
                    {
                        primary: true, appCentered: true, direction: 'column',
                        align: 'center', pad: 'small', colorIndex: 'grey-1'
                    },
                    React.createElement(
                        'p',
                        null,
                        'Winter is coming ',
                        React.createElement(
                            'a',
                            {href: 'http://#', target: '_blank'},
                            'Stark'
                        ),
                        '!'
                    )
                )
            );
        }
    }]);

    return App;
}(Component), _class.propTypes = {
    transactions: PropTypes.array,
    summary: PropTypes.object,
    gridFields: PropTypes.array,
    actions: PropTypes.object
}, _temp));

function mapStateToProps(state) {
    var transactions = state.transactions;

    return {
        transactions: transactions.transactions,
        summary: transactions.summary,
        gridFields: transactions.transactionsGrid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//# sourceMappingURL=index-compiled.js.map
