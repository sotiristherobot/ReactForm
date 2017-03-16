import React from 'react';
import {render} from 'react-dom'; 
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';

import './css/style.css';

//components
import App from './components/App';
import LoggedIn from './components/LoggedIn';
import NotFound from './components/NotFound';

const Root = () => {
    return(
        <Router>
            <div>
                <Route exact path='/' component={App}/>
                <Route exact path='loggedin' component={LoggedIn}/>
            </div>
        </Router>
    )
}
render(<Root />, document.querySelector('#react'));
