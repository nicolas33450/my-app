import React, { Component } from 'react';
import Header_Netflix from '../Header_Netflix/Header_Netflix';
import Features_Netflix from '../Features_Netflix/Features_Netflix';
import List_Features from '../List_Netflix/List_Netflix';
import './Netflix.css'

class Netflix extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Header_Netflix />
                
                <Features_Netflix />

                <div className="row">
                    <div className="toptv col-12 ml-4 mb-1"> Top TV picks fro jack </div>
                    <List_Features titre='https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be' />

                    <div className="toptv col-12 ml-4 mb-1"> Trending now </div>
                    <List_Features titre='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be' />

                    <div className="toptv col-12 ml-4 mb-1"> Most watch in horror </div>
                    <List_Features titre='https://api.themoviedb.org/3/genre/27/movies?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be' />

                    <div className="toptv col-12 ml-4 mb-1"> Sci-fi greats</div>
                    <List_Features titre='https://api.themoviedb.org/3/genre/878/movies?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be' />

                    <div className="toptv col-12 ml-4 mb-1"> Comedy magic </div>
                    <List_Features titre='https://api.themoviedb.org/3/genre/35/movies?sort_by=popularity.desc&page=1&api_key=87dfa1c669eea853da609d4968d294be' />
                </div>

              

            </div>
        )
    }
}
export default Netflix;