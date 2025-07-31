import { useState } from "react";

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 1,
        counter2: 10,
        counter3: 100
    });

    const { counter1, counter2, counter3 } = state;

  return(
    <>
        <h1>Counter App</h1>
        <h2>Counter 1: {counter1}</h2>
        <h2>Counter 2: {counter2}</h2>
        <h2>Counter 3: {counter3}</h2>
        <p>Use the buttons below to change the counter value.</p>
        <hr />
        <p>Click the buttons to increment, decrement, or reset the counter.</p>
        <button className="btn btn-success" onClick={() => setCounter({
            ...state,
            counter1: counter1 + 1,
        })}>+1</button>
        <button className="btn btn-danger" onClick={() => setCounter({
            ...state,
            counter1: counter1 - 1,
        })}>-1</button>
      
        <button className="btn btn-secondary" onClick={() => setCounter({...state, counter1: 1})}>Reset</button>
        <hr />
    </>
  )
}
