import React from 'react';
//Components

//Icons
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteTodo = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeTodo = () => {
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
        <div className={`todo ${todo.completed ? "completed" : ''}`}>
            <li className={`todo-item`}>{text}</li>
            <button onClick={completeTodo} className="complete-btn"><AiOutlineCheck aria-label="Completar" /></button>
            <button onClick={deleteTodo} className="delete-btn"><AiOutlineDelete aria-label="Deletar" /></button>
        </div>
    )
}

export default Todo;