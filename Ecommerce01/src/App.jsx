import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyRoute from './MyRoute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <MyRoute/>
    </div>
  )
}

export default App
