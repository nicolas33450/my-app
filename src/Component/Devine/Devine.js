import React, { Component } from 'react';

class Devine extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            recup: 0,
            nb: Math.floor(Math.random()*9) + 1,
            message:"",
        }
    };
   
    verif(valeur) {
        if(valeur < this.state.nb){
           this.setState({
               message: "Plus grand"
           })
        }
        else if(valeur > this.state.nb){
            this.setState({
                message: "Plus petit"
            })
        }
        else
            this.setState({
                message: "Gagné"
            })    
    }
    recupCount(){
        this.recupCount({
            recup: this.state.recup
        })       
    }



    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ color: 'red' }}> POULOULOU </h1>
                        <h1>{this.state.message}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center pt-3">
                        <button onClick={()=>this.verif(1)} className="btn btn-secondary btn-lg"> 1 </button>
                        <button onClick={()=>this.verif(2)} className="btn btn-secondary btn-lg"> 2 </button>
                        <button onClick={()=>this.verif(3)} className="btn btn-secondary btn-lg"> 3 </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center pt-3">
                        <button onClick={()=>this.verif(4)} className="btn btn-secondary btn-lg"> 4 </button>
                        <button onClick={()=>this.verif(5)} className="btn btn-secondary btn-lg"> 5 </button>
                        <button onClick={()=>this.verif(6)} className="btn btn-secondary btn-lg"> 6 </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center pt-3">
                        <button onClick={()=>this.verif(7)} className="btn btn-secondary btn-lg"> 7 </button>
                        <button onClick={()=>this.verif(8)} className="btn btn-secondary btn-lg"> 8 </button>
                        <button onClick={()=>this.verif(9)} className="btn btn-secondary btn-lg"> 9 </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Devine;
