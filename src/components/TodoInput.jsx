import React, { Component } from 'react';

class TodoInput extends Component {
    state = { 
        inputFieldValue : "",

     } 

     addButtonHandler = () =>{
        if(this.state.inputFieldValue == ""){
            return
        }
        this.props.onAddButtonPress(this.state.inputFieldValue);
        this.setState({inputFieldValue:""});
     } 

    render() { 
        return (
            <div className='row justify-content-center'>
                <input className='col-2 m-2' type="text" value={this.state.inputFieldValue} onChange={e => this.setState({inputFieldValue: e.target.value})} />
                <div className='col-5'>
                    <button onClick={this.addButtonHandler} className="btn btn-primary btn-lg m-2">+</button>
                    <button onClick={() => this.props.setFilter(1)} className="btn btn-success btn-lg m-2">Completed</button>
                    <button onClick={() => this.props.setFilter(0)} className="btn btn-warning btn-lg m-2">Todo</button>
                    <button onClick={() => this.props.setFilter(-1)} className="btn btn-primary btn-lg m-2">Reset Filters</button>
                </div>
            </div>
        );
    }
}
 
export default TodoInput;