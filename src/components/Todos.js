import React, { Fragment, useState, useEffect } from "react";
import Addtodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const Todos = () => {
    const [todosState, setTodosState] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                setTodosState(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getTodos();
    }, [])

    // nhan id tu component con
    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        })
        setTodosState(newTodos);
    }
    const deleteTodo = async id => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const newTodos = todosState.filter(todo => todo.id !== id);
            setTodosState(newTodos);
        }
        catch (error) {
        console.log(error.message);
    }
}

const addTodo = async title => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
            })
        // đưa những giá trị đã có + data mới thêm (res.data)
        const newTodos = [...todosState, res.data]
        setTodosState(newTodos);
    } catch (error) {
        console.log(error);
    }
}
//return
return (
    //truyen props
    <Fragment>
        <Addtodo addTodoFunc={addTodo} />
        {todosState.map(todo => {
            //truyen props vao component con Todoitem : todoProps
            return <TodoItem
                key={todo.id}
                todoProps={todo}
                markCompleteFunc={markComplete}
                deleteTodoFunc={deleteTodo}
            />
        })}
    </Fragment>
)
}
export default Todos;