import React from 'react';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        if (!this.props.results) {
            return (

                <h3> Logged in but there is no data </h3>
            )
        }
        return (
            <div>
                <h1>Logged In </h1>
                <li> {this.props.results.results[0].final_script}</li>
            </div>
        )
    }
}
export default LoggedIn;
