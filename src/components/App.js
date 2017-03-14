import React from 'react';

import Form from './Form';

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
    }
    render() {
        return(
            <Form addResponseToState={this.addResponseToState}/>
        )
    }
}
export default App;
