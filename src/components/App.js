import React from 'react';

import Form from './Form';
import LoggedIn from './LoggedIn';

class App extends React.Component {
    constructor() {
        super();
        console.log(this);
        this.addResponseToState = this.addResponseToState.bind(this);
        this.state = {
          jsonResponseObject : {}  
        };
    }
    addResponseToState(obj) {
        let result = this.state.jsonResponseObject;
        result = obj;
        this.setState({
            jsonResponseObject : result,
            authorizedUser : true
        });

        this.context.router.history.push('/loggedin', this.state.jsonResponseObject);

        /* this.context.router.history.push('/loggedin', this.state.jsonResponseObject);*/
        /* this.props.history.push('/loggedin');*/
    }
    render() {

        return(
            <Form addResponseToState={this.addResponseToState}/>
        )
    }
}
App.contextTypes = {
    router: React.PropTypes.object
}
export default App;
