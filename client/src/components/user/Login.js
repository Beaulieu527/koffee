import React, { Component } from 'react';
import { Button, TextInput } from 'react-materialize';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleOnChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }


    render() {
        return (
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <ul className="collection"></ul>
                <br />
                <br />
                <form>
                    <TextInput id="email" email validate label="Email" onChange={event => this.handleOnChange(event)} />
                    <br />
                    <TextInput id="password" password label="Password" onChange={event => this.handleOnChange(event)} />
                    <Button waves="teal" style={{ marginRight: '5px' }}>
                        Login
                </Button>
                </form>
            </div>
        );
    }
}

export default Login;