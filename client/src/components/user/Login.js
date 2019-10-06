import React, { Component } from 'react';
import { Button, TextInput } from 'react-materialize';
import { userLoginFetch } from '../../actions/usersActions';
import { connect } from 'react-redux';


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

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
      }


    render() {
        return (
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <ul className="collection"></ul>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <TextInput id="email" email validate label="Email" onChange={event => this.handleOnChange(event)} />
                    <br />
                    <TextInput id="password" password label="Password" onChange={event => this.handleOnChange(event)} />
                    <Button waves="teal" type="submit" style={{ marginRight: '5px' }}>
                        Login
                </Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  })
  
  export default connect(null, mapDispatchToProps)(Login);