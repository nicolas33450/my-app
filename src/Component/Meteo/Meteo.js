import React, { Component } from 'react'



class Meteo extends Component {

    constructor() {
        super();
        this.state = {
            articles: "",
            bg: "",
        }
    }
    componentDidMount() {
        fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22bordeaux%2C%20fr%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.query.results.channel.item.forecast)                
                let articles = data.query.results.channel.item.forecast.map((meteo) => {
                    return (
                        <div key={meteo.code} className="col-12 col-md-3 text-center">                                            
                            Code : {meteo.code}<br/>
                            Date : {meteo.date}<br/>
                            Day : {meteo.day}<br/>
                            High : {meteo.high}<br/>
                            Low : {meteo.low}<br/>
                            {meteo.text}<br/><br/>
                            <img src={"./images/" +  meteo.text + ".png"} alt="sun"/>
                        </div>                       
                    );
                })
                this.setState({
                    articles: articles,
                    bg: data.query.results.channel.item.condition.text,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: "url(./images/Bordeaux-" + this.state.bg + ".jpg)", backgroundRepeat: "no-repeat"}}>                
                {this.state.articles}
            </div>
        )
    }
}
export default Meteo;