import React, { Component } from 'react'
import './RandomUser.css'

class RandomUser extends Component {

    constructor() {
        super();
        this.state = {
            articles: "",
        }
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let articles = data.results.map((item) => {
                    return (
                        <div key={item.email} className="col-12 text-center">
                            <img src={item.picture.large} alt="tt" className="photo rounded-circle" /><br />
                            <div className="nom"> hi, my name is <br />
                                {item.name.first} {item.name.last} </div>
                            <div className="img1">&nbsp;</div>
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
export default RandomUser;