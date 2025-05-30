import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import Contextprovider from './Context/contextCreateandProvide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextprovider>
    <App />
    </Contextprovider>
    <ToastContainer/>
  </StrictMode>,
)
