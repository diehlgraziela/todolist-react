import React from 'react';
//Icons
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <li className="completed">Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    )
}

export default TodoList;