import React from 'react'
import { useState } from 'react';

const UseMemoRough = () => {
const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Slow function (simulating a heavy calculation)
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // just delay
    return num * 2;
  };

  const result = expensiveCalculation(count); // recalculates every render!

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default UseMemoRough;


