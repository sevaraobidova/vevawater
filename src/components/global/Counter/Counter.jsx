import { React, useState } from "react";

export default function Counter({ value }) {
  const [counter, setCounter] = useState(value || 0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter <= 1) return;

    setCounter((count) => count - 1);
  };

  return (
    <div className="bg-gray-light flex gap-2 items-center rounded-lg">
      <button className="p-3 text-blue" onClick={decrease}>
        -
      </button>
      <span>{counter}</span>
      <button className="p-3 text-blue" onClick={increase}>
        +
      </button>
    </div>
  );
}
