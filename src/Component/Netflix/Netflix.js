import React, { Component } from 'react';
import Header from './Header'
import Feature from './Feature'
import List from './List'

import './css/netflix.css'

class Netflix extends Component  {
    constructor() {
        super();
        this.state= {
            
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Feature />
                <List title="Top TV picks for Jack" search="discover/tv?sort_by=popularity.desc&page=1"/>
                <List title="Trending now" search="discover/movie?sort_by=popularity.desc&page=1"/>
                <List title="Most watched in Horror" search="genre/27/movies?sort_by=popularity.desc&page=1"/>
                <List title="Sci-Fi greats" search="genre/878/movies?sort_by=popularity.desc&page=1"/>
                <List title="Comedy Magics" search="genre/35/movies?sort_by=popularity.desc&page=1"/>
            </div>
        );
    }
}

export default Netflix