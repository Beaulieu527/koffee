import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = () =>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">orders</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">Register</a></li>
                        <li><a href="#!">Login</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">Logout</a></li>
                    </ul>
                    <nav>
                    <div class="nav-wrapper">
                        <Link to="/" className="brand-logo">Koffee</Link>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/menu">Menu</Link></li> 
                            <li><Link to="/cart">My cart</Link></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                            
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Customer<i class="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </nav>
   
        
    )
}

export default Navbar;