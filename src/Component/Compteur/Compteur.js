import React, { Component } from 'react';

class Compteur extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }

    };

    addCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    removeCount(){
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }
      
    reset(){
        this.setState({
            count: 0
        })
    }



    render() {

        var stylePerso={
            color: "grey",
            fontSize: 100,
        }

        return (

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{color:'red'}}> Compteur </h1>
                        <h1 style={stylePerso}>{this.state.count}</h1>
                        <button onClick={this.addCount.bind(this)} className="btn btn-success"> Ajouter </button>
                        <button onClick={this.reset.bind(this)} className="btn btn-warning"> reset </button>
                        <button onClick={this.removeCount.bind(this)} className="btn btn-danger"> Enlever </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Compteur;
