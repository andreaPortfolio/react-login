import React, {PropTypes} from 'react'
import {withRouter} from 'react-router-dom'

import Article from 'grommet/components/Article';


const protectedArea = withRouter(({history}) => (
    <Article full="vertical"><h1>Protected Area</h1></Article>
));


export default protectedArea
