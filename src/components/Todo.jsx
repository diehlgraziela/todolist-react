import React from 'react';
//Components

//Icons
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const Todo = () => {
    return (
        <div className="todo">
            <li className="todo-item">item 1</li>
            <button className="complete-btn"><AiOutlineCheck /></button>
            <button className="delete-btn"><AiOutlineDelete /></button>
        </div>
    )
}

export default Todo;