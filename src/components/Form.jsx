import React from 'react';
//Icons
import { AiOutlinePlus } from 'react-icons/ai';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            },
        ]);
        setInputText("");
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                placeholder="Adicionar uma tarefa"
            />

            <button onClick={submitTodoHandler} type="submit"><AiOutlinePlus /></button>

            <select name="todos" className="filter-todo">
                <option value="all">Todos</option>
                <option value="done">Concluídos</option>
                <option value="todo">A fazer</option>
            </select>
        </form>
    )
}

export default Form;