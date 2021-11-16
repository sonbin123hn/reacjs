import React, { useState } from 'react';
import PropTypes from "prop-types";


const Addtodo = props => {
    const [title,setTitle] = useState('')
    const addTodo = props.addTodoFunc;
    const addTodoFormStyle = {
        display: 'flex'
    }
    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }
    const changeTitle = event => {
        setTitle(event.target.value)
    }
    const addSingleTodo = event => {
        event.preventDefault()
        if(title !== ''){
            addTodo(title)
        }
    }
    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input type="text" name="title" style={addTodoInputStyle} onChange={changeTitle} placeholder="Add to do" />
            <input type="submit"  value="Add" className='btn' />
        </form>
    )
}
Addtodo.propTypes = {
    addTodo: PropTypes.func,
}
export default Addtodo;