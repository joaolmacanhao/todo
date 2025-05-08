import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite a tarefa'/>
            <select>
                <option value="">Selecione a prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm