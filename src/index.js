import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import NotFound from './components/NotFound';
import App from './components/App';
import LoggedIn from './components/LoggedIn';


import {BrowserRouter, Match, Miss} from 'react-router';


const PrivateRoute = (component) => {
    const isAuthenticated = false;

    if (isAuthenticated){

        return React.createElement(LoggedIn);
    }
    else {
        return null;
    }
}

const Root = () => {
    return (

        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={App}/>
                <PrivateRoute path='/loggedin'/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#react'));


