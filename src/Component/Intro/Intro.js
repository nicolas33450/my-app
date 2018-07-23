import React, {Component} from 'react';
import Img1 from './images/index4.png';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Principal from '../Principal/Principal'


class Intro extends Component{
    constructor(){
        super();
        this.state = {
            prenom: 'Nicolas',
            nom: 'Tellier',            
        };        
    }
    render(){
        return(
            <div className ="row">
                <Header name="Nico"/>
                
                <Principal/>
                 <div className="col-12 col-md-6 order-2 order-md-1 text-center">
                        {this.state.prenom}<br/>
                        {this.state.nom}  
                        <Nav/>
                </div>  
                <div className="col-12 col-md-6 order-1 order-md-2 text-center">
                    <img src={Img1} className="" alt="Img1"/>
                </div> 
                <Footer/>           
            </div>
        )
    }
}
export default Intro;
