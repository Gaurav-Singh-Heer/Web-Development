import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h3>"GAURAV KA MAAL"</h3>
    <App />
  </StrictMode>,
)
