import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1, maxValue = Infinity) => {
    if (counter + value > maxValue) {
      alert(`Counter cannot exceed ${maxValue}`);
      return;
    }
    setCounter(counter + value);
  }
  const decrement = (value = 1 , minValue = 0) => {
    if (counter - value < minValue) {
      alert(`Counter cannot go below ${minValue}`);
      return;
    }
    setCounter(counter - value);
  };
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };

};
