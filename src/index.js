import React from 'react';
import {render} from 'react-dom'; 

import './css/style.css';
import NotFound from './components/NotFound';
import App from './components/App';
import LoggedIn from './components/LoggedIn';

import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';


class Root extends React.Component {

    render() {
        return (

            <Router>
                <div>
                    <Route exact={true} path='/' component={App}/>
                    <Route path='/loggedin' component={LoggedIn}/>
                </div>

            </Router>


        )
    }
}
render(<Root/>, document.querySelector('#react'));
/* const Root = () => {
 *     return (
 *         <Router>
 *             <div>
 *                 <Route exact={true} path='/' component={(props) =>{
 *                      return   <App kokos={props}/>
 *                     }}/>
 *                 <Route exact={true} path='/loggedin' render={ (props) => {
 *                         const authorized = true;
 *                         if (authorized) {
 *                             console.log(props);
 *                             return React.createElement(LoggedIn, props);
 *                         }
 *                         else {
 *                             return <NotFound/>;
 *                         }
 *                         }}/>
 *             </div>
 *         </Router>
 *     )
 * }
 * render(<Root/>, document.querySelector('#react'));
 * */
