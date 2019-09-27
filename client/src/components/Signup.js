import React, { Component } from 'react';
import {Button,TextInput } from 'react-materialize';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: ''
         };
    }

    handleOnChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <div class="container">
                <h2 style={{textAlign:'center'}}>Register</h2>
                <br/>
                <br/>
                <form>
                    <TextInput id="name" label="Name" onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <TextInput id="email" email validate label="Email" onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <TextInput id="password" password label="Password" onChange={event => this.handleOnChange(event)} />
                    <br/>
                    <TextInput id="address" label="Address" onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <TextInput id="phoneNumber" label="Phone Number" onChange={event => this.handleOnChange(event)}/>
                    <Button waves="teal" style={{marginRight: '5px'}}>
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}

export default Signup;