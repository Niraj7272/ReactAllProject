import { useState } from 'react'
import MyRoute from './MyRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyRoute/>
    </div>
  )
}

export default App
