import React, { Component } from 'react';
import img1 from './images/Pablo.jpg';
import img2 from './images/Narcos.png'




class Features_Netflix extends Component {

    constructor() {
        super();
    };

    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <img className="pablo w-100" src={img1} alt="" />                    
                </div>
            </div>
        );
    }
}
export default Features_Netflix;
