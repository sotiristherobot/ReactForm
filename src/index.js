import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import NotFound from './components/NotFound';
import App from './components/App';
import LoggedIn from './components/LoggedIn';

import {BrowserRouter as Router, Route} from 'react-router-dom';

const Root = () => {
    return (
        <Router>
            <div>
                <Route exact={true} path='/' component={App}/>
                <Route exact={true} path='/loggedin' render={ () => {
                        const authorized = false;
                        if (authorized) {
                            return React.createElement(LoggedIn);
                        }
                        else {
                            return <NotFound/>;
                        }
                        }}/>
            </div>
        </Router>
    )
}
render(<Root/>, document.querySelector('#react'));

