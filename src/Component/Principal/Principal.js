import React, {Component} from 'react';
import Img4 from './images/index4.png';

class Principal extends Component{

    constructor(){
        super();

    };


render(){

    return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <img src={Img4} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Principal;


