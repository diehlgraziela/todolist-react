import React from 'react';
//Icons
import { AiOutlinePlus } from 'react-icons/ai';

const Form = () => {
    return (
        <form>
            <input type="text" placeholder="Adicionar uma tarefa" />
            <button type="submit"><AiOutlinePlus /></button>

            <select name="todos" class="filter-todo">
                <option value="all">Todos</option>
                <option value="done">Concluídos</option>
                <option value="todo">A fazer</option>
            </select>
        </form>
    )
}

export default Form;