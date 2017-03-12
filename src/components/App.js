import React from 'react';

import Form from './Form';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          jsonResponse : {}  
        };
    }
    addResponseToState(obj) {
        /* const result = {this.state.jsonResponse};*/
        console.log('Add response from app');
    }
    render() {
        return(
            <Form addResponseToState={this.addResponseToState}/>
        )
    }
}
export default App;
