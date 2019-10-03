import React, { Component } from 'react';
import { Navbar, NavItem, Divider, Dropdown } from 'react-materialize';
import { Link } from "react-router-dom";

class Nav extends Component {

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
                    <Link to="/">
                        Logout
                    </Link>
                </Dropdown>

            </Navbar >
        );
    }
}

export default Nav