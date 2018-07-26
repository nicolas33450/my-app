import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {       
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div style={{color: 'grey'}} className="" key={item}>
                    {item} | <button  className=" btn btn-danger m-5" onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 style={{color: "grey"}} className="">Ma Todo list</h1>

                            <input
                                value={this.state.userInput}
                                type="text"
                                placeholder="Renseigner un item"
                                onChange={this.onChange.bind(this)}
                                className="form-control mb-2"
                            />
                            <button
                                onClick={this.addTodo.bind(this)}
                                className="btn btn-success"
                            >
                                Ajouter
                    </button>

                            <div className="">
                                {this.renderTodos()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;