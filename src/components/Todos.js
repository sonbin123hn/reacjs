import React, { Fragment,useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
    const [todosState,setTodosState] = useState(['Viec 1','Viec 2','Viec 3'])
    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoProps={todo} />
            })}
        </Fragment>
    )
}
export default Todos;