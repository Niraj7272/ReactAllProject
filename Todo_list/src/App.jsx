import { useState } from 'react'
import TODoList from './ToDoList'
import AddList from './AddList'
import Button from './Button'
import Registration from './Registration'
import Login from './Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <TODoList/> */}
      {/* <Registration/> */}
      <Login/>
    </div>
  )
}

export default App
