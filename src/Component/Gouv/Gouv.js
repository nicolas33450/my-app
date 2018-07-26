import React, { Component } from 'react';

class Gouv extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            input:"",
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value,
        })
        fetch('https://api-adresse.data.gouv.fr/search/?q='+ event.target.value)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
                        
            let input = data.features.map((item) => {
                return (
                    console.log(data),
                    <div key={item.properties.id} className="col-12 col-md-3 text-center">                                                     
                         {item.properties.label}
                        
                    </div>                       
                );
            })
            this.setState({
                input: input,
                
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

   

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <input  value={this.state.userInput} onChange={this.onChange.bind(this)} type="text" placeholder=" Adresse" />                        
                        {this.state.input}
                    </div>
                </div>
            </div>
        )
    }
}
export default Gouv;