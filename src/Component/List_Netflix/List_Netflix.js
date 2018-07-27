import React, { Component } from 'react';

class List_Netflix extends Component {

    constructor() {
        super();
        this.state = {
            photos: '',
        }
    };
    componentDidMount() {
        fetch(this.props.titre)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.results)
                let photos = data.results.map((item, i) => {

                    if (i < 6) {

                        return (
                            <div key={item.name} className="col-12 col-md-2 mb-5">
                                <img className="w-100" src={"http://image.tmdb.org/t/p/original/" + item.backdrop_path} alt="" />
                            </div>
                        );
                    }
                })
                this.setState({
                    photos: photos
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {

        return (
            <div className="container-fluid pr-5 pl-5">
                <div className=" row ">
                    {this.state.photos}
                </div>
            </div>


        );
    }
}
export default List_Netflix;
