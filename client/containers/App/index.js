import React, {Component, PropTypes} from 'react';

import './style.css';


import AppGrommet from 'grommet/components/App';
import Header from '../../components/header';
import Footer from 'grommet/components/Footer';


export default class App extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {

        //const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props;

        return (
            <AppGrommet centered={false}>
                <Header/>


                {this.props.children}

                <Footer full="horizontal" primary={true} appCentered={true} direction="column"
                        align="center" pad="small" colorIndex="grey-1">
                    <p>
                        Winter is coming <a href="http://#" target="_blank">Stark</a>!
                    </p>
                </Footer>
            </AppGrommet>
        );
    }
}


//export default connect(null, null)(App);
