import List from './components/List';
import './App.css';
import React, { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) =>{
    e.preventDefault();

    if(newTodo.length == 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (deleteIndex) =>{
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== deleteIndex;
    });

    setTodos(filteredTodos);
  };

  const handleCheckComplete = (index) =>{
    const updatedTodos = todos.map((todo, i) => {
      if (index == i){
        todo.complete = !todo.complete;

      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit ={(e) => {
        handleNewTodoSubmit(e);
      }}>
        <input onChange = {(e) => {
          setNewTodo(e.target.value);
        }} type = "text" value = {newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />

      {todos.map((todo, i) => {
          return (
          <List 
            key = {i}
            i = {i}
            todo={todo}
            handleCheckComplete = {handleCheckComplete}
            handleTodoDelete = {handleTodoDelete} 
            />
          );
      })}
    </div>
  );
}

export default App;
