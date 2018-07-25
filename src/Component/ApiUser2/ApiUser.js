import React, { Component } from 'react';
import deco from './deco.css';

class Api extends Component  {
    constructor() {
        super();
        this.state= {
            user:'',
            userInfo:'',
            message:'',
            titre: 'mon nom est :' 
        };
    }

    affich(event){
        this.setState({
            message: event.target.dataset['value'],
            titre: event.target.dataset['title']
        })
        
    }
        componentDidMount() {
            fetch('https://randomuser.me/api/')
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                   let user = data.results.map((user) => {
                       return(
                                    <div key={user.email} className="col-12 col-md-3 mx-auto">
                                        <img src={user.picture.large} alt="" className="w-100 arrondi"/><br/>
                                    </div>                            
                       )
                   });       
                    let userInfo= data.results.map((user) => {
                       return(
                           <div className="container" key={user.email}>
                                <div className="row">
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="Salut mon nom est" data-value={user.name.first+' '+user.name.last} id="user">
                                        &nbsp;
                                    </div>
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="Mon email est " data-value={user.email} id="email">
                                        &nbsp;
                                    </div>
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="J ai " data-value={user.dob.age} id="age">
                                        &nbsp;
                                    </div>
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="Mon adresse est " data-value={user.location.street+' '+user.location.city} id="city">
                                        &nbsp;
                                    </div>
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="Mon tel est" data-value={user.phone} id="phone">
                                        &nbsp;
                                    </div>
                                    <div className="col ajout" onMouseOver={this.affich.bind(this)} data-title="Mon pass est" data-value={user.login.password} id="pwd">
                                        &nbsp;
                                    </div>
                                </div>
                           </div>
                       )
                   });
                   data.results.map((user) =>{
                       this.setState({
                           message: user.name.first+ ' ' + user.name.last,
                       })
                    })
                   this.setState({
                        user: user,
                        userInfo: userInfo,
                    })

                })
                .catch((err) =>{
                    console.log(err)
                })
      }

      render(){
          return(
                    <div className="container-fluid">
                        <div className="row bg-dark m-0 header text-center text-white">
                            <div className="col-12">
                            <h1>
                                API USER
                            </h1>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 info">
                                    <div className="row headerInfo">
                                        
                                    </div>
                                <div className="text-center">
                                    {this.state.user}
                                        <h4>
                                            {this.state.titre}
                                        </h4>
                                        <h2>
                                        {this.state.message}
                                        </h2>
                                        {this.state.userInfo}
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                 
          )
      }

}

export default Api