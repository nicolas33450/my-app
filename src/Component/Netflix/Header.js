import React, { Component } from 'react';
import Logo from './img/logo.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="row position-absolute w-100" id="header">
                <div className="col-6 col-md-2 col-xl-1">
                    <img src={Logo} alt="Logo Netflix" className="w-100" />
                </div>
                <div className="col-6 col-md-4  d-flex align-items-center justify-content-between">
                    <a href='#'> Browse</a>
                    <a href='#'> My list</a>
                    <a href='#'>Top picks</a>
                    <a href='#'>Recent</a>
                </div>
            </div>
        );
    }
}

export default Header