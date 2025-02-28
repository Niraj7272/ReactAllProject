import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Frontpage from './Frontpage'
import AddProduct from './AddProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Frontpage/>
        <AddProduct/>
    </div>
  )
}

export default App
