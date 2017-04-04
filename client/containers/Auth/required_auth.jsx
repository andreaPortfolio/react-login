import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                //this.props.routeActions.push('/foo'); push('/');
                console.log(this.props)
                this.props.dispatch(push("/"));
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                //push('/');
                console.log(this.props)
                this.props.dispatch(push("/"));
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.reducers.auth.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}
