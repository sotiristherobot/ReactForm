import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmited = this.formSubmited.bind(this);
    }
    formSubmited() {
        event.preventDefault();
        /* console.log(this);*/

        const loginInfo = {
            username: this.username.getDOMNode().value,
            password: this.password.getDOMNode().value
        }

        console.log(loginInfo);
        this.sForm.getDOMNode().reset(0); //reset form
    }
    render() {
        return(
            <form ref={(input) => {this.sForm = input;}} onSubmit={this.formSubmited}>
                <input ref={(input) => {this.username = input;}} type='text' placeholder='Username'/>
                <input ref={(input) => {this.password = input;}} type='password' placeholder='Password'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form;
