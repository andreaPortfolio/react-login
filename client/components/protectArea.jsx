import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

import Article from 'grommet/components/Article';


class protectedArea extends Component {


    componentWillMount() {


        this.props.getUsers()


    }


    render() {


        return (<Article full="vertical"><h1>Protected Area UserList</h1></Article>)
    }
}

function mapStateToProps(state) {

    console.log('form')
    return {
        usersList: state.reducers.user
    };
}


export default connect(mapStateToProps, actions)(protectedArea)
