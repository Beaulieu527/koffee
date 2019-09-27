import React, { Component } from 'react';
import {Button,TextInput } from 'react-materialize';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "", 
            password:""
         };
    }
    render() {
        return (
            <div class="container">
            <h2 style={{textAlign:'center'}}>Login</h2>
            <br/>
            <br/>
            <form>
                <TextInput email validate label="Email" />
                <br/>
                <TextInput password label="Password" />
                <Button waves="teal" style={{marginRight: '5px'}}>
                    Login
                </Button>
            </form>
        </div>
        );
    }
}

export default Login;