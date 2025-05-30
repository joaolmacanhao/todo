import {useState} from 'react'
import App from '../App';

const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");
    const [ category, setCategory] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log (value, category)
        if (!value || !category) return;
        addTodo(value, category)
        setValue("");
        setCategory("") ;
        
    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite a tarefa'
            value = {value}
            onChange={(e) => setValue (e.target.value)}/>
            <select 
            value = {category}
            onChange={(e) => setCategory (e.target.value)}>
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