import React from 'react';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Logged In </h1>
                <li> {this.props.results.results[0].final_script}</li>
            </div>
        )
    }
}
export default LoggedIn;
