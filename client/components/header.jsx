import React, {Component} from 'react';
import {connect} from 'react-redux';


import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import Title from 'grommet/components/Title';
import Actions from 'grommet/components/icons/base/Actions';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Columns from 'grommet/components/Columns';
import {Link} from 'react-router-dom';

class header extends Component {


    renderLinks() {

        if (this.props.authenticated) {
            return (
                <Link to={'/signout'}>Sign out</Link>
            );
        }
        else {
            return (<div>
                <Link style={{marginRight: '1em'}} to={'/signin'}>Sign in</Link>
                <Link to={'/signup'}>Sign up</Link>
            </div>);
        }
    }

    render() {

        return (<Header splash={false} size='medium' float={false} fixed={false}
                        direction="row" justify="between" size="large"
                        pad={{horizontal: 'medium'}}>

            <Box flex={true}
                 justify='end'
                 direction='row'
                 responsive={false}>

                {this.renderLinks()}
            </Box>
        </Header>)
    }
}


function mapsStateToProps(state) {

    return {authenticated: state.reducers.auth.authenticated}
}


export default connect(mapsStateToProps, null)(header);
