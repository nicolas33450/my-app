import React, { Component } from 'react';
import Header_Netflix from '../Header_Netflix/Header_Netflix';
import Features_Netflix from '../Features_Netflix/Features_Netflix';
import List_Features from '../List_Netflix/List_Netflix';

class Netflix extends Component {

    constructor() {
        super();
        this.state = {
            articles: "",
        }
    }

    render() {
        return (
            <div className="container">
                <Header_Netflix />
                <Features_Netflix />
                <List_Features />
            </div>
        )
    }
}
export default Netflix;