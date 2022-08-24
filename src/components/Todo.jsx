import React from 'react';
//Components

//Icons
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><AiOutlineCheck /></button>
            <button onClick={deleteHandler} className="delete-btn"><AiOutlineDelete /></button>
        </div>
    )
}

export default Todo;