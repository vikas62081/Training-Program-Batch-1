import React, { useState } from "react";

const Counter = (props) => {
  const {
    incrementBy = 1,
    decrementBy = 1,
    resetValue = 0,
    initialCount = 0,
  } = props;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + incrementBy);
  };
  const handleDecrement = () => {
    setCount(count - decrementBy);
  };
  const handleReset = () => {
    setCount(resetValue);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Incement</button>
      <button
        onClick={handleDecrement}
        disabled={count - decrementBy > 0 ? false : true}
      >
        Decrement
      </button>
      <button onClick={handleReset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

export const Grettings = ({ name = "Unknown" }) => <p>Hello, {name}</p>;
