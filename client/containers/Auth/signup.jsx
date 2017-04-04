import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

import {compose} from "redux"


import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Notification from 'grommet/components/Notification';
import Article from 'grommet/components/Article';
import validator from 'validator';


class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: null,
            password: '',
            passwordError: null,
            confirmPassword: ''

        };
    }


    handleSubmit = (event) => {
        event.preventDefault();


        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;

        if (validator.isEmail(email)) {
            this.setState({emailError: null});
        }
        else {
            this.setState({emailError: ['Invalid email address']});
        }

        if (password === confirmPassword) {
            this.setState({passwordError: null});
        }
        else {
            this.setState({passwordError: ['does not match the confirm password']});
        }

        if (validator.isEmail(email) && password === confirmPassword) {
            this.props.signupUser({email, password});
            this.setState({email: '', emailError: null, password: '', passwordError: null, confirmPassword: ''});
        }


    };

    handleEmail = (event) => {

        const email = event.target.value;
        this.setState({email});

    };

    handlePassword = (event) => {

        const password = event.target.value;
        this.setState({password});

    };

    handleConfirmPassword = (event) => {

        const confirmPassword = event.target.value;
        this.setState({confirmPassword});

    };


    render() {

        //props from reduxForm below


        const {handleSubmit, pristine, reset, submitting} = this.props


        return (<div>
            <Article full="vertical">
                <Columns size='small'
                         justify='center'
                         masonry={true}>
                    <Box direction='row'
                         justify='center'
                         align='center'
                         wrap={true}
                         pad='small'
                         margin='small'>
                        <Form>
                            <FormField label='Email'
                                       htmlFor='email'
                                       error={this.state.emailError && this.state.emailError}>

                                <TextInput value={this.state.email} onDOMChange={this.handleEmail}/>
                            </FormField>


                            <FormField label='Password'
                                       htmlFor='password'
                                       error={this.state.passwordError && this.state.passwordError}>
                                <TextInput type="password" value={this.state.password}
                                           onDOMChange={this.handlePassword}/>
                            </FormField>
                            <FormField label='Confirm password'
                                       htmlFor='confirmPassword'
                            >
                                <TextInput type="password" value={this.state.confirmPassword}
                                           onDOMChange={this.handleConfirmPassword}/>
                            </FormField>
                            <Footer pad={{"vertical": "medium"}}>
                                <Button label='Submit'
                                        type='submit'
                                        primary={true}
                                        onClick={this.handleSubmit}/>
                            </Footer>
                        </Form>
                        {this.props.errorMessage && <Notification message={this.props.errorMessage}
                                                                  size='small'
                                                                  status='warning'/>}
                    </Box>
                </Columns>
            </Article>
        </div>)
    }
}


function mapStateToProps(state) {

    console.log('form')
    return {
        errorMessage: state.reducers.auth.error
    };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'signup'
    })
)(SignUp)



