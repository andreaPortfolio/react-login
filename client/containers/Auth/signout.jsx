import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';


class SignOut extends Component {


    componentWillMount() {
        this.props.signoutUser();

        this.props.history.push("/");
    }


    render() {


        return (<div>Sign out</div>)
    }
}


export default connect(null, actions)(SignOut)



