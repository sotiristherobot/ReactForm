import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import NotFound from './components/NotFound';
import App from './components/App';
import LoggedIn from './components/LoggedIn';


import {BrowserRouter, Match, Miss} from 'react-router';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={App}/>
                <Match exactly pattern='/loggedin' component={LoggedIn}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#react'));
