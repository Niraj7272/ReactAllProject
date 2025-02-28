import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Frontpage from './Frontpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Frontpage/>
    </div>
  )
}

export default App
