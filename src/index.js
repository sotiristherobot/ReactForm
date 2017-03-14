import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import NotFound from './components/NotFound';
import App from './components/App';
import LoggedIn from './components/LoggedIn';

import {BrowserRouter as Router, Route} from 'react-router-dom';

const PrivateRoute = (component) => {
    const isAuthenticated = false;
    if (isAuthenticated) {
        return React.createElement(LoggedIn);
    }
    else {
        return null;
    }
}

const Root = () => {
    return (
        <Router>
            <div>
                <Route exact={true} path='/' component={App}/>
                <PrivateRoute exact={true} path='/loggedin' component={LoggedIn}/>
            </div>
        </Router>
    )
}
render(<Root/>, document.querySelector('#react'));

