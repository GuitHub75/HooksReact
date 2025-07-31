import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {HooksApp} from './HooksApp'
import { CounterApp } from './01-useSate/CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
