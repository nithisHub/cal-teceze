import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cal from './components/Cal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cal/>
  </StrictMode>,
)
