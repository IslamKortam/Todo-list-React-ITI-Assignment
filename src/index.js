import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


import TodoApp from './components/TodoApp';


const localStorageKey = "my-todo-app-imkortam"



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