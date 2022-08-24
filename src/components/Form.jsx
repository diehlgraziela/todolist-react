import React, { useState } from 'react';
//Icons
import { AiOutlinePlus } from 'react-icons/ai';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const [id, setId] = useState(0);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        //set previous todo's properties and add text, completed and id
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: id,
            },
        ]);
        setId(id + 1);
        setInputText("");

        //empty input validation
        if (inputText == "") {
            setTodos([...todos])
            setId(id);
        }

        //console.log(inputText);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                placeholder="Adicionar uma tarefa"
            />

            <button onClick={submitTodoHandler} type="submit"><AiOutlinePlus aria-label="Enviar" /></button>

            <select name="todos" className="filter-todo">
                <option value="all">Todos</option>
                <option value="done">Concluídos</option>
                <option value="todo">A fazer</option>
            </select>
        </form>
    )
}

export default Form;