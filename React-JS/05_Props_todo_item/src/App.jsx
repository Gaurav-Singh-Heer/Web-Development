import React from "react";
import "./App.css";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";

const App = () =>{
  return (
    <div className="todo-container">
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Repeat"/>
      <Button />
    </div>
  );
}

export default App;