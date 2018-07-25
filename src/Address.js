import React, { Component } from 'react'

class Address extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            api: 'https://api-adresse.data.gouv.fr/search/?q=',
            limit: '&limit=50',
            address: ''
        };
    }
    onChange(event) {
        if (event.target.value != '' && event.target.value != null) {
            let recherche = event.target.value
            let api = this.state.api + recherche + this.state.limit
            fetch(api)
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    let address = data.features.map((resultat) => {
                        return (
                            <div className="col-4">
                                {resultat.properties.postcode} <br />
                                {resultat.properties.city}
                            </div>
                        )
                    })
                    this.setState({
                        address: address,
                    })
                });
        }
        this.setState({
            userInput: event.target.value,
        });
    }
    render() {
        return (
            <div>


                <div className="container">
                    <div className="row">
                        <input
                            value={this.state.userInput}
                            onChange={this.onChange.bind(this)}
                            type="text"
                            placeholder="Adresse" /><br />
                    </div>
                    <div className="row">
                        {this.state.address}
                    </div>
                </div>
                {this.state.userInput}
            </div>
        );
    }
}

export default Address