import { useState } from "react";
import { useCounter } from "../hooks/useCounter"

const hevyStuff = (iterationNumber = 10) =>{
  for(let i =0 ; i < iterationNumber; i++){
      console.log("Aqui vamos");
  }

  return  `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const {counter,increment,decrement} = useCounter(10);
    const [show, setshow] = useState(true)

  return (
    <>
        <h1> Counter : <small>{counter}</small></h1>
        <h3>{hevyStuff(5000)}</h3>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>setshow(!show)} type="button"  className="btn btn-outline-secondary">SHOW : {JSON.stringify(show)}</button>
        <hr />
      
    </>
    )
}
