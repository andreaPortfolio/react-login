import axios from 'axios';

import {push} from 'react-router-redux'
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types'

//require('axios-debug')(axios);
const ROOT_URL = 'http://localhost:3000';


export function signInUser(fields) {

    return function (dispatch) {

        console.log(fields.email, fields.password)


        let data = {
            "email": fields.email,
            "password": fields.password
        };

        axios.post(`${ROOT_URL}/api/users/login`, data)
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                console.log(response)
                dispatch({
                    type: AUTH_USER
                });
                ///save the jwt token

                localStorage.setItem('token', response.data.id);
                //redirect to retstricted area by dispatch push
                dispatch(push("/protectarea"));

            }).catch(() => dispatch(authError('Bed login')));

    }

}


export function authError(error) {

    return {
        type: AUTH_ERROR,
        payload: error
    }

}

export function signoutUser() {

    localStorage.removeItem('token');

    return {type: UNAUTH_USER}
}


export function signupUser({email, password}) {


    let data = {
        "email": email,
        "password": password
    };
    return function (dispatch) {

        console.log(email, password)
        axios.post(`${ROOT_URL}/api/Users`, data)
            .then(response => {

                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.id);
                dispatch(push("/protectarea"));
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 422) {
                        console.log(error.response.data.error.message);
                        dispatch(authError(error.response.data.error.message));
                    }

                }


            });
    }
}
