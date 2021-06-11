import React from 'react';
import PropTypes from 'prop-types';
import './todoList.scss'

TodolList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodolList.defaultProps = {
    todos:[],
    onToDoClick: null
}

function TodolList(props) {
    const {todos, onToDoClick} = props;

    function handleClick(todo) {

        if(onToDoClick){
            onToDoClick(todo);
        }
    }

    return (
        <div>
            <ul>
            {
                todos.map((todo)=> (
                    <li key={todo.id} onClick={() => handleClick(todo)}>{todo.title}</li>
                ))
            }
            </ul>
        </div>
    );
}

export default TodolList;