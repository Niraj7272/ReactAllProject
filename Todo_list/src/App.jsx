import { useState } from 'react'
import TODoList from './ToDoList'
import AddList from './AddList'
import View from './View'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TODoList/>
     
      <View/>
    </div>
  )
}

export default App
