import React, { Component } from 'react';
import logoFeature from './img/narcos.logo.png'

class Feature extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="row " id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-5 pt-5">
                            <img src={logoFeature} alt="Logo Feature" className="w-100" />
                            <h2>Season 2 now available</h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature