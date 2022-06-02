import React, { useState } from 'react'
import './App.css';
import CatFacts from './components/catFacts/CatFacts';
import MyInput from './components/UI/input/MyInput';
import TodoItems from './components/UI/TodoItems/TodoItems';

function App() {

  let states = [
    {
      title: 'Learn about hooks',
      isComplited: false,
      id: '1'
    },
    {
      title: 'Go to lunch',
      isComplited: false,
      id: '2'
    },
    {
      title: 'Learn Promise',
      isComplited: false,
      id: '3'
    }
  ]

  const [todos, setTodos] = useState(states)
  const [title, setTitle] = useState('')


  const finishTodo = (id) => {
    const list = [...todos]
    const current = list.find(l => l.id === id)
    current.isComplited = !current.isComplited
    setTodos(list)
  }

  const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

  const addTodo = (title) => {
    setTodos(
      [...todos,
      {
        title: title,
        isComplited: false,
        id: Date.now()
      }])
    setTitle('')
  }

  return (
    <div className="bg-gray-900 text-white h-screen py-10">
      <h1 className='text-center text-4xl font-bold mb-6'>ToDo List</h1>

      {todos.map(todo => <TodoItems
        key={todo.id}
        todo={todo}
        finishTodo={finishTodo}
        removeTodo={removeTodo}
      />)}
      <MyInput
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        placeholder='New task'
      />
      <CatFacts />
    </div>

  );
}

export default App;
