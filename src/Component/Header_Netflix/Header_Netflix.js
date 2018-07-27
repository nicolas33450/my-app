import React, { Component } from 'react';
import img1 from '../Features_Netflix/images/Logo.png';


class Header_Netflix extends Component {

    constructor() {
        super();
    };

    render() {

        return (

            <div className=" header row">
                <div className="col-12 col-md-4">
                    <img className="logo" src={img1} alt="logo" />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-between">
                    <nav className="menu">
                        <a href="#"> Browse </a>
                        <a href="#"> My list </a>
                        <a href="#"> Top picks</a>
                        <a href="#"> recent</a>
                    </nav>
                </div>
                <div className="col-12 col-md-4">
                    <input className="research" type="text" placeholder="research"/>
                </div>
            </div>

        );
    }
}
export default Header_Netflix;
