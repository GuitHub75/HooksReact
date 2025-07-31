import { useCounter } from "../hooks/useCounter";

export const CounterwIthCustomHook = () => {
    const { counter, increment, decrement, reset} = useCounter(0);
  return (
    <>
      <h1>Counter with Custom Hook {counter}</h1>
        <p>This component will use a custom hook to manage the counter state.</p>
      <hr/>
      <button className="btn btn-success" onClick={() => increment(10, 100)}>+</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(10, 0)}>-</button>
    </>
  );
};
