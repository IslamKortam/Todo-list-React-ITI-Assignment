import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import TodoApp from './components/TodoApp';

const onToggleCheckHandler = (item)=> {
    const newCompletedState = ! this.state.item.completed
    let newItem = {...this.props.item}
    newItem.completed = newCompletedState
    this.setState({item: newItem})
}


//ReactDOM.render(<TodoItem onToggleCheck = {onToggleCheckHandler} item = {{id:0, title:"Sleep", completed:true, isBeingEdited:false}}  />, document.getElementById('root'))
//ReactDOM.render(<TodoInput />, document.getElementById('root'))
ReactDOM.render(<TodoApp 
                items = {[
                    {id:0, title:"Sleep", completed:true, isBeingEdited:false},
                    {id:2, title:"Eat", completed:false, isBeingEdited:false},
                    {id:3, title:"Repeat", completed:true, isBeingEdited:true}
                ]}
                maxItemIndex = {10}
/>, document.getElementById('root'))