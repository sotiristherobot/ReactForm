import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmited = this.formSubmited.bind(this);
    }
    formSubmited(event) {
        event.preventDefault();
        //get values from form
        const loginInfo = {
            username: this.username.value,
            password: this.password.value
        }
        const params = 'email=' + loginInfo.username + '&password=' + loginInfo.password;

        const makeRequest = function(method, url, params, token) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open(method, url, true);

                if (token) {
                    request.setRequestHeader('Authorization', 'JWT ' + token);
                }
                else {
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                }
                request.onload = () => {
                    if (request.status == 200) {
                        resolve(request.response);
                    }
                    else {
                        reject(Error(request.statusText));

                    }
                }
                request.send(params);
            });
        }
        makeRequest('POST', 'https://i2x-challenge.herokuapp.com/core/login/ ', params, null)
            .then((token) => {
                console.log(token);
                token = JSON.parse(token).token;
                makeRequest('GET', 'https://i2x-challenge.herokuapp.com/ai/recording/list/', null, token)
                    .then((response) => {
                        console.log(response); 
                    });
            });
        this.sForm.reset(0); //reset form
    }

    render() {
        return (
            <form ref={(input) => this.sForm = input} onSubmit={this.formSubmited}>
                <input ref={(input) => this.username = input} type='text' placeholder='Username'/>
                <input ref={(input) => this.password = input} type='password' placeholder='Password'/>
                <button id='submitBtn' type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form;
