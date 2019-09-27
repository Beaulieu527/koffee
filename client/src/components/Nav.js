import React, { Component } from 'react';
import { Navbar,NavItem,Divider,Dropdown } from 'react-materialize';
import M from 'materialize-css'

class Nav extends Component {
    
    render() {
        return (
            <Navbar  brand={<a target="_blank" href="/">Koffee</a>} alignLinks="right">
            <NavItem href="/products">
                Menu
            </NavItem>
            <NavItem href="/cart">
                <i className="material-icons">shopping_cart</i>
            </NavItem>
            <Dropdown trigger={<a target="_blank" href="/">Customer</a>}>
                <a href="/orders">
                    Orders
                </a>
                <Divider/>
                <a href="/login">
                    Login
                </a>
                <a href="register">
                    Register
                </a>
                <Divider/>
                <a href="#">
                    Logout
                </a>
            </Dropdown>
            </Navbar>
        );
    }
}

export default Nav