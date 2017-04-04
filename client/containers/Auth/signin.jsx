import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

import {compose} from "redux"


import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Logo from 'grommet/components/icons/base/Login';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Article from 'grommet/components/Article';


class SignIn extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: ''

        };
    }

    componentWillReceiveProps(props) {
        console.log('props1')
    }

    componentDidMount() {
        console.log('props2')
    }


    handleSubmit = (event) => {

        //console.log(this.props);
        const email = event.username;
        const password = event.password;
        /*const rememberMe = event.rememberMe;
         this.setState({email, email, rememberMe});*/

        this.props.signInUser({email, password});

    }

    render() {

        const {errorMessage, handleSubmit, fields: {email, password}} = this.props;  //props from reduxForm below


        return (<Article full="vertical"><Columns size='small'
                                                  justify='center'
                                                  masonry={true}>
            <Box direction='row'
                 justify='center'
                 align='center'
                 wrap={true}
                 pad='small'
                 margin='small'
            ><LoginForm onSubmit={this.handleSubmit}
                        logo={<Logo />}
                        title='Login'
                        errors={errorMessage ? [errorMessage]:[]}
                        forgotPassword={<Anchor href='#' label='Forgot password?' />}
                        justify="center"
                        align="center"/>
            </Box></Columns></Article>)
    }
}


function mapStateToProps(state) {

    console.log('auth', state.reducers.auth)
    return {errorMessage: state.reducers.auth.error};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'signin',
        fields: ['email', 'password']
    })
)(SignIn)



