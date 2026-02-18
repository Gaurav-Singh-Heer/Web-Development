```md
# 🧠 Context API with Local Storage (Todo App)

## 📁 Step 1: Create Folder Structure

Inside `src` create a folder:

```

src/
└── context/

````

We will store all Context API logic here.

---

## 🧩 Step 2: Todo Data Structure (Default Thinking)

Each todo item will be stored inside an **array**.

Every todo object will have:

- `id`
- `todo` (text)
- `completed` (true/false)

Example:

```js
{
  id: 1,
  todo: "Learn Context API",
  completed: false
}
````

---

## 📄 Step 3: Create `TodoContext.js`

Path:

```
src/context/TodoContext.js
```

### Basic Context Setup

```js
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ]
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
```

---

## 🔁 Step 4: Add Todo Functions in Context

Previously in Theme Context we had:

```js
lightTheme: () => {}
darkTheme: () => {}
```

Now for Todo we need functions:

* `addTodo`
* `updateTodo`
* `deleteTodo`
* `toggleComplete`

### Updated Context

```js
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
```

These are just **placeholders**.
Actual logic will be written inside `App.jsx` (or main provider component).

---

## 📦 Step 5: Create `index.js` in context folder

Path:

```
src/context/index.js
```

Purpose: cleaner imports.

```js
export { TodoContext, Todoprovider, useTodo } from "./TodoContext";
```

Now instead of:

```js
import { useTodo } from "./context/TodoContext";
```

We can write:

```js
import { useTodo } from "./context";
```

---

## 🎯 Core Goal

Our basic Todo functionality:

> **Add a task into the todos array**

Later we will implement:

* Add Todo
* Update Todo
* Delete Todo
* Toggle Complete
* Local Storage sync

But first focus:

## 🟢 First Feature: Add Todo

Flow:

```
Input → addTodo() → update state → store in context → show UI
```

The context will hold:

```
todos state + functions
```

All components can access it using:

```js
const { todos, addTodo } = useTodo();
```

---

## 🧠 Key Concept

Context API is used when:

```
Props drilling becomes messy
```

Instead of:

```
App → Dashboard → Card → Button → Todo
```

We directly access:

```
useTodo()
```

from anywhere.

---

## 🧱 Architecture Summary

```
context/
 ├── TodoContext.js
 └── index.js
```

`TodoContext.js`

* creates context
* defines functions
* exports provider

`index.js`

* cleaner imports

---

## 🚀 Next Step

Next we will:

* create state in App
* implement `addTodo`
* connect with Local Storage
* wrap app with `Todoprovider`

But for now:

> Context structure for Todo is ready.

```js

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      ... 
    </TodoProvider>
```

# 🧠 Context API Todo Functions + LocalStorage

Now we will implement all Todo functions inside **App.jsx** and connect them with **LocalStorage**.

This completes the basic functionality of our Context-based Todo App.

---

# ⚙️ Step 1: Todo State in `App.jsx`

Inside `App.jsx` create state for todos.

```js
const [todos, setTodos] = useState([]);
```

---

# 🟢 Step 2: Add Todo

Adds a new task to the top of the array.

```js
const addTodo = (todo) => {
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};
```

Explanation:

* `Date.now()` → unique id
* `...todo` → contains `{ todo: "", completed: false }`
* `...prev` → old todos remain

---

# 🟡 Step 3: Update Todo

Updates text or any property of a todo.

```js
const updateTodo = (id, todo) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
    )
  );
};
```

Alternate approach (loop method):

```js
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
```

---

# 🔴 Step 4: Delete Todo

Remove a todo using `filter`.

```js
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};
```

Explanation:

* Creates new array without matching id

---

# 🔵 Step 5: Toggle Complete

Used for checkbox completion.

```js
const toggleComplete = (id) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo
    )
  );
};
```

Explanation:

* If id matches → toggle completed
* Otherwise keep same todo

---

# ✅ COMPLETED: Basic Context Functionality

We now have:

* addTodo
* updateTodo
* deleteTodo
* toggleComplete

All handled using Context API.

---

# 💾 LocalStorage Functionality

Now we connect todos with **LocalStorage** so data persists after refresh.

---

## 🔁 Step 6: Load Todos from LocalStorage

Use `useEffect` when app loads.

```js
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);
```

Explanation:

* Runs once on mount
* Fetch todos from localStorage
* Set into state

---

## 💾 Step 7: Save Todos to LocalStorage

Whenever todos change, store them.

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

Explanation:

* Runs every time `todos` updates
* Converts array → string
* Stores in localStorage
---

# ❓ Important Question

## Why didn’t we do this instead?

```js
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, [todos]);
```

Looks similar, but this is **wrong**.

---

# 🚨 Reason: Infinite Loop + Unnecessary Reads

If we put `[todos]` as dependency:

### Flow becomes:

```
todos changes
   ↓
useEffect runs
   ↓
getItem() from localStorage
   ↓
setTodos()
   ↓
todos changes again
   ↓
useEffect runs again
   ↓
INFINITE LOOP 🔁
```

So every time state updates:

* We read from localStorage again
* We set state again
* React re-renders again
* Effect runs again

This creates:

> ❌ Continuous refresh cycle
> ❌ Performance issues
> ❌ Possible infinite loop

---

# 🧠 Correct Separation of Responsibilities

We separate into **two effects**:

### 1️⃣ Load once on mount

```js
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);
```

Runs only once.

---

### 2️⃣ Save whenever todos change

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

Runs when state updates.

---

# 🏁 Real-World Analogy

Think of LocalStorage like a notebook.

* On app start → read notebook once
* During app → update notebook whenever changes happen

You **don’t re-read the notebook after every change**
because you already know the latest state in memory.

---

# 📌 Final Rule

| Task                   | Dependency |
| ---------------------- | ---------- |
| Load from localStorage | `[]`       |
| Save to localStorage   | `[todos]`  |

Never combine both in one effect.

---

# 🧩 Step 8: Provide Context to App (Components + Integration)

Now we connect UI components with Context.

Create a **components** folder inside `src`.

```

src/
└── components/
├── TodoForm.jsx
├── TodoItem.jsx
└── index.js

```

---

# 🟢 TodoForm.jsx

Handles adding new todos.

```js
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
```

---

# 🟡 TodoItem.jsx

Handles:

* edit
* delete
* toggle complete

```js
import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete}=useTodo()

    // Now Functionality

    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg}) // will keep id same and change only msg
        setIsTodoEditable(false)
    }

    //call toggle Functionality

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
```

---

# 📦 components/index.js

Cleaner exports.

```js
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export { TodoForm, TodoItem };
```

---

# 🧠 App.jsx (Provider + Logic)

```js
import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Load from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
```

---

# 🐞 Bugs Faced During Step 8

## ❌ BUG 1 — map() not returning JSX

```js
{todos.map((todo)=> {
  <TodoItem/>
})}
```

No return → nothing renders.

### Fix

```js
{todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo}/>
))}
```

---

## ❌ BUG 2 — Wrong toggle comparison

```js
prevTodo === id
```

### Fix

```js
prevTodo.id === id
```

---

## ❌ BUG 3 — `useTodo` not called

```js
const { updateTodo } = useTodo
```

Hook wasn’t called.

### This caused

* Edited todo not saving
* Checkbox click not working
* Delete not working

### Fix

```js
const { updateTodo, deleteTodo, toggleComplete } = useTodo();
```

---

# 🧠 Final Data Flow

```
TodoForm → addTodo()
        → setTodos()
        → Context updates
        → UI updates
        → localStorage saves
```

---

# 🎯 Result

✔ Global todo state
✔ Add / edit / delete
✔ Toggle complete
✔ LocalStorage persistence
✔ No prop drilling

---

# 🏗 Final Architecture

```
src/
 ├── context/
 │    ├── TodoContext.js
 │    └── index.js
 │
 ├── App.jsx
 └── components/
```

---

# 🔁 Flow of Data

```
Input Field
   ↓
addTodo()
   ↓
setTodos()
   ↓
Context updates
   ↓
UI updates
   ↓
LocalStorage saves
```

---

# 🎯 What We Achieved

- Context API setup
- Todo functions
- Global state
- LocalStorage persistence
- No prop drilling

---