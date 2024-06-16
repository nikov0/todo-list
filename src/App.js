import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isComplete: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do List</h1>
          <input
              style={{width:350}}
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Task name"
          />
          <button style={{marginTop: 6}} onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
                <li key={index} style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                  <span style={{paddingRight: 6}}>{todo.text}</span>
                  <button style={{marginRight:6}} onClick={() => toggleComplete(index)}>
                    {todo.isComplete ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
          </ul>
        </header>
      </div>
  );
}

export default App;
