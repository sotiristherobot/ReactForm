import React from 'react';
import {render} from 'react-dom'; 


import Form from './Form';
import NotFound from './NotFound';

import {BrowserRouter, Match, Miss} from 'react-router';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={Form}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#react'));
