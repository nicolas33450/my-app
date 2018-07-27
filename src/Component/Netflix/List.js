import React, { Component } from 'react';

class List extends Component  {
    constructor() {
        super();
        this.state= {
            list:'',
        };
    }


    componentDidMount(){
        var api = 'https://api.themoviedb.org/3/';
        var key = '&api_key=87dfa1c669eea853da609d4968d294be';
        var url = api + this.props.search + key;
        console.log(url)
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            let list = data.results.map((movie,i) => {
                if(i < 6)
                {
                    var image = 'http://image.tmdb.org/t/p/original'+ movie.backdrop_path;
                    return(
                            <div className="col-2 mb-5 film" key="movie.id">
                                <div className="imgFilm" style = {{ backgroundImage: 'url(' + image + ')', 
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'center center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                >

                                </div>
                                <div className="ficheFilm position-absolute ">
                                    <h3>
                                        {movie.name}
                                        {movie.title}
                                    </h3>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                    )
                }   

            })
            this.setState({
                list: list,
            })
        })

    }
    
    render() {
        return (
            <div className="row list">
                <div className="col-12">
                    <h3>{this.props.title}</h3>
                </div>
                {this.state.list}
            </div>
        );
    }
}

export default List