import React, { Component } from 'react'

class ListeApi extends Component {

    constructor() {
        super();
        this.state = {
            articles: "",
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let articles = data.map((item) => {
                    return (
                        <div key={item.id} className="col-12 col-md-4">
                            <img src={item.url} className="w-100" alt="tt" />
                            {item.title}
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
                    {this.state.articles}
                </div>
            </div>
        )
    }
}
export default ListeApi;