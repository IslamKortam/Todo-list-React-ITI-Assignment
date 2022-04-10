import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    state = { 
        items: this.props.items,
        currentItemIndex: this.props.maxItemIndex
    } 

    createNewTodoItem = (title) => {
        const item = {id:this.state.currentItemIndex + 1, title, completed:false, isBeingEdited:false};
        let items = this.state.items.concat(item);
        this.setState({items, currentItemIndex: this.state.currentItemIndex + 1});
        //TO Update the local storage here
    }

    removeItem = (itemDeleted) => {
         const newItems = this.state.items.filter((item) => item.id != itemDeleted.id);
         this.setState({items: newItems});
         //TO Update the local storage here
    }
        
    toggleCompleteness = (itemToggled) => {
        const newItems = this.state.items.map((item) => {
            if(item.id == itemToggled.id){
                item = {...item}    //Create a deep copy of the item
                item.completed = !item.completed //Toggle Status
            }
            return item
        })
        
        this.setState({items: newItems});
        //TO Update the local storage here
    }

    render() { 
        return (
            <main className="container">
                <TodoInput onAddButtonPress={this.createNewTodoItem} />
                {this.state.items.map( item => <TodoItem item = {item} onToggleCheckBox = {this.toggleCompleteness} onDelete = {this.removeItem} key={item.id} /> )}
            </main>
        );
    }
}
 
export default TodoApp;