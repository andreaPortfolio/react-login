import React, {Component, PropTypes} from 'react';

import './style.css';


import Article from 'grommet/components/Article';

import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';


export default class MainPage extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {

        //const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props;

        return (
            <Article scrollStep={false} full="vertical">
                <div>
                    <Hero background={<Image src='/img/152010-.jpg' fit='cover' full={true} />}
                          backgroundColorIndex='dark'
                          size='large'>
                        <Box direction='row'
                             justify='center'
                             align='center'>
                            <Box basis='1/2'
                                 align='end'
                                 pad='medium'/>
                            <Card heading={
                                <Heading strong={true} style={{color:'black'}}>
                                        Games Company
                                </Heading>}
                                  description=""
                                  label="label"
                                  size="large"
                                  style={{color:'black'}}
                                  link={<Anchor href="#" primary={true} label="Learn More" />
                              }/>
                        </Box>
                    </Hero>
                </div>
            </Article>
        );
    }
}


//export default connect(null, null)(App);
