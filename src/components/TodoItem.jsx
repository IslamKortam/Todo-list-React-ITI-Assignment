import React, { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class TodoItem extends Component {

    state = {
        tempTitle: this.props.item.title
    }

    deleteButtonHandler = () =>{
        this.props.onDelete(this.props.item);
    }

    checkBoxToggleHandler = () => {
        this.props.onToggleCheckBox(this.props.item);
    }

    endEditing = (editingStatus) => {
        this.props.onEndEditing({item: this.props.item, editingStatus, newTitle: this.state.tempTitle})
    }

    getCheckBox(){
        return <input onChange={this.checkBoxToggleHandler} type="checkbox" checked={this.props.item.completed}/>
    }


    getNormalView(){
        return (
            <div className='row justify-content-center'>
                <span className='col-4' onDoubleClick={()=>{this.props.onStartEditing(this.props.item)}}>{this.props.item.title}</span>
                <div className='col-2'>
                    {this.getCheckBox()}
                    <i className="fa-solid fa-trash-can m-2" onClick={this.deleteButtonHandler}></i>
                </div>
            </div>
        )
    }

    getEditView(){
        return(
            <div className='row justify-content-center'>
                <input className='col-2 m-2' type="text" value={this.state.tempTitle} onChange={e => this.setState({tempTitle: e.target.value})} />
                <div className='col-4'>
                    <button onClick={() => this.endEditing("success")} className="btn btn-success btn-sm m-2">Submit</button>
                    <button onClick={() => this.endEditing("cancel")} className="btn btn-danger btn-sm m-2">Cancel</button>
                </div>
            </div>
        )
    }



    render() { 
        return ( this.props.item.isBeingEdited ? this.getEditView() : this.getNormalView() );
    }
}
 
export default TodoItem;