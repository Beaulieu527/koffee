import React, { Component } from 'react';
import {Button,TextInput } from 'react-materialize';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="container">
                <h2 style={{textAlign:'center'}}>Register</h2>
                <br/>
                <br/>
                <TextInput label="Name" />
                <br/>
                <TextInput email validate label="Email" />
                <br/>
                <TextInput password label="Password" />
                <br/>
                <TextInput label="Address" />
                <br/>
                <TextInput label="Phone Number" />
                <Button waves="teal" style={{marginRight: '5px'}}>
                    Register
                </Button>
            </div>
        );
    }
}

export default Signup;