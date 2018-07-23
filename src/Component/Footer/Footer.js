import React, {Component} from 'react';
import Img2 from './images/ny1.jpg';

class Footer extends Component{

    constructor(){
        super();

    };


render(){

    return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <img src={Img2} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
