import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
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
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


createRoot(document.getElementById('root')).render(
 // <StrictMode>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
  //</StrictMode>
)
