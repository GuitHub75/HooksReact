import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter,increment,decrement} = useCounter(10);
    const [show, setshow] = useState(true)

  return (
    <>
        <h1> Counter : <Small value={counter}/></h1>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>setshow(!show)} type="button"  className="btn btn-outline-secondary">SHOW : {JSON.stringify(show)}</button>
        <hr />
      
    </>
    )
}
