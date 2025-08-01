import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {HooksApp} from './HooksApp'
//import { CounterApp } from './01-useSate/CounterApp'
//import { CounterwIthCustomHook } from './01-useSate/CounterwIthCustomHook'
//import { SimpleForm } from './02-useEfect/simpleForm'
//import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScrenn } from './04-useRef/FocusScrenn'


createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <FocusScrenn/>
  //</StrictMode>
)
