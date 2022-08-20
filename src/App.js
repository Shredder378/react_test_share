import { useState } from 'react' 
import MyDo from './MyDo'
import MyForm from './MyForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete}: {...todo} 
      )
    ])
  }
  return (
    <div className="App">
      <header>
        <h1>TaskList: {todos.length}</h1>
      </header>

      <MyForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <MyDo
            todo={todo} 
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
        
      
    </div>
  );
}

export default App;

