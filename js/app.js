import React from 'react';
import Hello from './hello.js';
import Form from './Form';

let App = React.createClass({
  render(){
    return (
        <Form />
    );
  }
});

React.render(<App />,document.body)
