import React from 'react';

class Form extends React.Component {
    formSubmited(event) {
        event.preventDefault();
        console.log(this);
    }
    render() {
        return(
            <form onSubmit={(e) => this.formSubmited(e)}>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form;
