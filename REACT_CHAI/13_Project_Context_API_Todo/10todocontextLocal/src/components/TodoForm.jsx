import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {

    // Define State for individual Todo
    const [todo, setTodo] = useState("")
    const {addTodo}=useTodo()

    const add = (e) =>{
        e.preventDefault()

        if(!todo) return
        // addTodo({id:Date.now(), todo:todo, completed:false})
        // No ned for Date.now() as already given in App.jsx function
        // addTodo({todo:todo, completed:false})
        // in new syntax if our field and value have same then we can do as todo:todo -> todo
        addTodo({todo, completed:false})

        setTodo("") // field which came that also must have a todo so will clean it up

    }

    return (
        // onSubmit of form will call add
        // and for wiring will give value={todo}
        // on Change update value
        <form onSubmit={add} className="flex"> 
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value) }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;