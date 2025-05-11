import { useState } from "react";
import "./App.css"

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {


  const[todos , setTodos] = useState([])
  const[search, setSearch] = useState("");
  const[filter, setFilter] = useState("All");
  const[sort, setSort] = useState ("Asc")

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },]
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ?  todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo =  (id) =>{
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(newTodos)
  }
  
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

        
      <div className="todo-list">
        {todos
       .filter((todo) => {
        if (filter === "All") {
          console.log(filter)
          return true;
        } else if (filter === "Completed") {
          console.log(filter)
          return todo.isCompleted;
        } else if (filter === "In") {
          console.log(filter)
          return !todo.isCompleted;
        } else {
          return false; // ou false, dependendo do comportamento desejado
        }
      })
        .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .sort((a , b) => sort ==="Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ) )}
      </div>
        <TodoForm  addTodo={addTodo}/>
  </div>
  

}
export default App
