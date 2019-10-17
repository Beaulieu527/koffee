import React, { Component } from 'react';
import { Navbar, Divider, Dropdown } from 'react-materialize';
import { Link } from "react-router-dom";

class Nav extends Component {

    handleClick = event => {
        // event.preventDefault()
        // Remove the token from localStorage
        localStorage.removeItem("token")
        // Remove the user object from the Redux store
        this.props.logout()
      }
      
    render() {
        return (
            <Navbar className='navbar' brand={<Link to="/">Koffee</Link>} alignLinks="right">

                <Link to="/products">
                    Menu
                </Link>
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                </Link>
                <Dropdown trigger={<a target="_blank" href="/">Customer</a>}>
                    <Link to="/orders">
                        Orders
                    </Link>
                    <Divider />
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="register">
                        Register
                    </Link>
                    <Divider />
                    <Link to="/" onClick={(event) => { this.handleClick(event) }}>
                        Logout
                    </Link>
                </Dropdown>

            </Navbar >
        );
    }
}

export default Nav