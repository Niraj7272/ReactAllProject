import { useState } from 'react'
import TODoList from './ToDoList'
import AddList from './AddList'
import Button from './Button'
import Registration from './Registration'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <TODoList/> */}
      <Registration/>
    </div>
  )
}

export default App
