import React, { Component } from 'react';

class List_Netflix extends Component {

    constructor() {
        super();
        this.state={
            articles: '',
        }
    };

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.results)
                let articles = data.results.map((item) => {
                    return (
                       
                        <div key={item.name} className="col-12">
                        </div>
                    );
                })
                this.setState({
                    articles: articles
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
                    <div className="col-12">
                        {this.state.articles}
                    </div>
                </div>
            </div>
        );
    }
}
export default List_Netflix;
