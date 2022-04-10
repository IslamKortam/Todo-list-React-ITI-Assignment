import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    state = { 
        items: this.props.items,
        currentItemIndex: this.props.maxItemIndex,
        //localStorageKey: this.props.localStorageKey
    } 

    updateLocalStorage = (newItems) => {
        var itemsStringfied = JSON.stringify(newItems);
        localStorage.setItem(this.props.localStorageKey, itemsStringfied);
    }

    createNewTodoItem = (title) => {
        const item = {id:this.state.currentItemIndex + 1, title, completed:false, isBeingEdited:false};
        var items = this.state.items.concat(item);
        this.setState({items, currentItemIndex: this.state.currentItemIndex + 1});
        //TO Update the local storage here
        this.updateLocalStorage(items)
    }

    removeItem = (itemDeleted) => {
         const newItems = this.state.items.filter((item) => item.id != itemDeleted.id);
         this.setState({items: newItems});
         //TO Update the local storage here
         this.updateLocalStorage(newItems)
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
        this.updateLocalStorage(newItems)
    }

    enterEditStatus = (itemToggled) => {
        const newItems = this.state.items.map((item) => {
            if(item.id == itemToggled.id){
                item = {...item}    //Create a deep copy of the item
                item.isBeingEdited = true //Toggle Status
            }
            return item
        })
        
        this.setState({items: newItems});
        
    }

    
    
    
    endEditing = (arguements) => {
        var itemEdited = arguements.item;
        var editStatus = arguements.editingStatus
        var newTitle = arguements.newTitle;

        var newItems = this.state.items.map((item) => {
            if(item.id == itemEdited.id){
                item = {...item}    //Create a deep copy of the item
                item.isBeingEdited = false //Toggle edit Status
                if(editStatus.toLowerCase() == 'success'){
                    item.title = newTitle;
                }
            }
            return item
        })
        
        this.setState({items: newItems});
        if(editStatus.toLowerCase() == 'success'){
            this.updateLocalStorage(newItems)
        }
    }

    render() { 
        return (
            <main className="container">
                <TodoInput onAddButtonPress={this.createNewTodoItem} />
                {this.state.items.map( item => <TodoItem item = {item} onToggleCheckBox = {this.toggleCompleteness} onDelete = {this.removeItem} onStartEditing = {this.enterEditStatus} onEndEditing = {this.endEditing} key={item.id} /> )}
            </main>
        );
    }
}
 
export default TodoApp;