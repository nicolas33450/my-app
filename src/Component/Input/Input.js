import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            items: [],
        }
    }
    onChange(event) {
        this.setState({
            userInput: event.target.value,
        })
    }
    addItem(event) {
        event.preventDefault(),
            this.setState({
                items: [...this.state.items, this.state.userInput]
            })
        this.setState({
            userInput: "",/* remise a zero du input*/
        })
    };
    showItems(){
        return this.state.items.map((item) => {
            return(
               <div key={item}>{item} || <button type="button" onClick={this.delItems.bind(this, item)} className="btn btn-danger"> X </button></div>              
            )
        })
    };
    delItems(item){
        
        let liste = this.state.items;
        let index = liste.indexOf(item);
        console.log(index);
        liste.splice(index,1);
        this.setState({
            items: liste
        })

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ color: 'purple' }} > Input </h1>
                        <form>
                            <input
                                value={this.state.userInput}
                                onChange={this.onChange.bind(this)}
                                type="text"
                                placeholder=" Nom" />
                            <button onClick={this.addItem.bind(this)} type="submit" className="btn btn-success m-3"> Ajoutez </button>
                            <h1 style={{ color: 'grey' }}>{this.showItems()}  </h1>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Input;