import React, { Component } from 'react';
import img1 from '../Features_Netflix/images/Logo.png'
import img2 from '../Features_Netflix/images/Pablo.jpg'
class Header_Netflix extends Component {

    constructor() {
        super();
    };

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bg-grey">
                        <img className="pablo" src={img2} alt="" />
                        <img src={img1} alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Header_Netflix;
