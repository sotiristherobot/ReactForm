import React from 'react';

import Form from './Form';
import LoggedIn from './LoggedIn';

class App extends React.Component {
    constructor() {
        super();
        this.addResponseToState = this.addResponseToState.bind(this);
        this.state = {
          jsonResponseObject : {}  
        };
    }
    addResponseToState(obj) {
        let result = this.state.jsonResponseObject;
        result = obj;
        this.setState({jsonResponseObject : result});

        /* this.props.history.push('/loggedin');*/
    }
    render() {
        if (this.state.jsonResponseObject.results) {
             return <LoggedIn />;
        }
        return(
            <Form addResponseToState={this.addResponseToState}/>
        )
    }
}
export default App;
