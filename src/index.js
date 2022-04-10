import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import TodoApp from './components/TodoApp';


const localStorageKey = "my-todo-app-imkortam"

const onToggleCheckHandler = (item)=> {
    const newCompletedState = ! this.state.item.completed
    let newItem = {...this.props.item}
    newItem.completed = newCompletedState
    this.setState({item: newItem})
}


let items = JSON.parse(localStorage.getItem(localStorageKey));
items = items || [];    //TO prevent error if no data found on local Storage

var maxItemIndex = 0;
items.forEach(item => {
    if(item.id > maxItemIndex){
        maxItemIndex = item.id;
    }
});

ReactDOM.render(<TodoApp 
                items = {items}
                maxItemIndex = {maxItemIndex}
                localStorageKey = {localStorageKey}
/>, document.getElementById('root'))