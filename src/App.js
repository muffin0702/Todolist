import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import 'bulma/css/bulma.css';

import React from "react";

const App = () => {
 const [todos, setTodos] = useState([]);

 const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  setTodos(newTodos);
 };

 const todoNameRef = useRef();

 const handleAddTodo = () => {
  const name = todoNameRef.current.value;
  if (name === "") return;
  
  setTodos((prevTodos) => {
   
   return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
  });
  todoNameRef.current.value = null;
 };

 const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
 };

 return (
  <div>
   <h1 className="m-3 ml-5 is-size-2 has-text-weight-semibold">To Do List</h1>
   <h2 className="m-3 ml-5">Remaining Task : {todos.filter((todo) => !todo.completed).length}</h2>
   <div className="box ml-5" style={{ width:"400px" }}>
   <input style={{ width:"200px" }} className="input is-small m-2" type="text" placeholder="Add Task" name="" id="" ref={todoNameRef} />
   <button className="button is-small m-2" onClick={handleAddTodo}>Add</button>
   <button className="button is-small m-2" onClick={handleClear}>Delete</button>
   <div className="m-3">
   <TodoList todos={todos} toggleTodo={toggleTodo} />
   </div>
   </div>
  </div>
 );
};

export default App;