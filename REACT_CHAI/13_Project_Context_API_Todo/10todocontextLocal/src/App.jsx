import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos((prev) => [todo,...prev])  // ...prev means old value we will put 3 values as we made 3 values in TodoContext.js of todos as id,todo,completed
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])  // ...prev means old value we will put 3 values as we made 3 values in TodoContext.js of todos as id,todo,completed
  }

  const updateTodo = (id, todo) =>{
    // now to find which id and which todo we will use a for-loop
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo)))

    // OR
    /*
    setTodos((prev) => {
      const updatedTodos = [];
    
      prev.forEach((prevTodo) => {
        if (prevTodo.id === id) {
          updatedTodos.push({ ...prevTodo, ...todo });
        } else {
          updatedTodos.push(prevTodo);
        }
      });
    
      return updatedTodos;
    });
    
    */
  }

  const deleteTodo = (id) => {  // for delete map is not good syntax instead create new array without this id using filter
    setTodos((prev) => prev.filter((todo) => todo.id !== id )) 
  }

  const toggleComplete = (id) => {
    // setTodos((prev) => prev.map((prevTodo) => prevTodo === id? "true":"false"))
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
    // if true keep rest todo as it is but toggle value of completed
    // if false keep same as prevTodo
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3"> 
                {/*Loop and Add TodoItem here */}
                {todos.map((todo)=> (
                  <div key={todo.id}
                  className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
