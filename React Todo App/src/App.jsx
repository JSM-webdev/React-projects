import { useState } from 'react'
import { Footer } from './Components/Footer'
import { TodoItems } from './Components/TodoItems'
import { EmptyState } from './Components/EmptyState'
import './App.css'

function todoFactory (text, timestamp) {
  
  return {
    text,
    done: false,
    timestamp,
  }
}

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    setTodos(prev => ([...prev, todoFactory(input, e.timeStamp)])) // input <> data.get('todo')
    setInput('')
  }
  
  return (
    <div className="App">
      <article className="card" id="container">
      <h1 id="heading">My React Todos list</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Submit a todo:</label>
        <input 
        value={input}
        onChange={e => setInput(e.target.value)}
        name="todo"
        type="text" 
        id="todo-input" 
        placeholder="Enter a todo item" 
        title="Please fill out this feild" 
        required />
      </form>
      <TodoItem todos={todos} setTodos={setTodos} />
      <EmptyState todos={todos} />
      <Footer todos={todos} setTodos={setTodos}/>
       </article>
    </div>   
  )
}

export default App
