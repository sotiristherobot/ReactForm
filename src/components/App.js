import React from 'react';

import Form from './Form';

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

        console.log(this.state);
    }
    render() {
        return(
            <Form addResponseToState={this.addResponseToState}/>
        )
    }
}
export default App;
