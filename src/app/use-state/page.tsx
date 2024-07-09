"use client";
import { useState } from "react";

export default function UseState() {

  const initalValues = () => {
    let total = 0;
    for (let i = 0; i < 1000000; i++) {
      total += i;
    }
    return total;
  };
  
  const [count, setCount] = useState<number>(() => initalValues());

  const handleClick1 = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleClick2 = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleClick3 = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={handleClick1}>Click me 1</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
    </div>
  );
}
