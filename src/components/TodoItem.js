import React from "react";
import PropTypes from "prop-types";


const TodoItem = props => {
    //nhan ket qua tu component cha key : todoProps
    const todo = props.todoProps;
    const markComplete = props.markCompleteFunc; 
    const deleteTodo = props.deleteTodoFunc;
    //style
    const TodoItem = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? "line-through" : "none",
    }
    const deleteButton = {
        background: '#ff0000',
        color: 'fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    //return
    return (<p style={TodoItem} >
        <input type="checkbox" onChange={markComplete.bind(this,todo.id)} checked={todo.completed} />
        {todo.title}
        <button style={deleteButton} onClick={deleteTodo.bind(this,todo.id)}>DELETE</button>
        </p>)
}
TodoItem.propTypes = {
    todoProps: PropTypes.object,
    markComplete: PropTypes.func,
    deleteTodo: PropTypes.func,
}
export default TodoItem;