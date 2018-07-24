import React, { Component } from 'react';

class Shifumi extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            recup: 0,
            robot: Math.floor(Math.random() * 3),
            message: "",
            
        }
    }

    verif(valeur) {

        this.setState({
            robot: Math.floor(Math.random() * 3)
        })

        if (valeur === this.state.robot) {
            this.setState({
                message: "égalité"
            })
        }
        else if ((valeur === 0) && (this.state.robot === 2) || (valeur === 1) && (this.state.robot === 0) ||
            (valeur === 2) && (this.state.robot === 1)) {
            this.setState({
                message: "Gagné"
            })
        }
        else
            this.setState({
                message: "Perdu"
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ color: 'red' }}> Shifumi </h1>
                        <h1>{this.state.message}</h1>
                        <h1>{this.state.robot}</h1>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <button onClick={() => this.verif(0)} className="btn btn-secondary btn-lg"> Pierre </button>
                        <button onClick={() => this.verif(1)} className="btn btn-secondary btn-lg m-3"> Feuille </button>
                        <button onClick={() => this.verif(2)} className="btn btn-secondary btn-lg"> Ciseau </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shifumi;