import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {HooksApp} from './HooksApp'
//import { CounterApp } from './01-useSate/CounterApp'
//import { CounterwIthCustomHook } from './01-useSate/CounterwIthCustomHook'
//import { SimpleForm } from './02-useEfect/simpleForm'
//import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScrenn } from './04-useRef/FocusScrenn'
//import { Memorize } from './09-memos/Memorize'
//import { MemoHook } from './09-memos/MemoHook'
//import { CallbackHook } from './09-memos/CallbakHook'
import { Padre } from './07-tarea-memo/Padre'


createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <Padre/>
  //</StrictMode>
)
