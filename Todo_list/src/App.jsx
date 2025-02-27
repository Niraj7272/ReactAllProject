import { useState } from 'react'
import TODoList from './ToDoList'
import AddList from './AddList'
import Button from './Button'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TODoList/>
      
    </div>
  )
}

export default App
