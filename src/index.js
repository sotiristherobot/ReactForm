import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import Form from './components/Form';
import NotFound from './components/NotFound';

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
