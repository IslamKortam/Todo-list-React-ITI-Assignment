import React, { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class TodoItem extends Component {


    deleteButtonHandler = () =>{
        this.props.onDelete(this.props.item);
    }

    checkBoxToggleHandler = () => {
        this.props.onToggleCheckBox(this.props.item);
    }


    getCheckBox(){
        return <input onChange={this.checkBoxToggleHandler} type="checkbox" checked={this.props.item.completed}/>
    }


    getNormalView(){
        return (
            <div className='row justify-content-center'>
                <span className='col-4'>{this.props.item.title}</span>
                <div className='col-2'>
                    {this.getCheckBox()}
                    <i className="fa-solid fa-trash-can m-2" onClick={this.deleteButtonHandler}></i>
                </div>
            </div>
        )
    }

    getEditView(){
        return(
            <span className='row justify-content-center'>Edit View...</span>
        )
    }



    render() { 
        return ( this.props.item.isBeingEdited ? this.getEditView() : this.getNormalView() );
    }
}
 
export default TodoItem;