import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {

    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Koffee
                <a className="grey-text text-lighten-4 right" href="https://github.com/Beaulieu527">Github</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;