import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "ложка" },
    { value: 0, id: 2, name: "вилка" },
    { value: 0, id: 3, name: "тарелка" },
    { value: 0, id: 4, name: "стакан" },
    { value: 0, id: 5, name: "кастрюля" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (counterId) => {
    const newCount = counters.filter((c) => {
      if (c.id === counterId) {
        c.value += 1;
      }
      return c;
    });
    setCounters(newCount);
  };
  const handleDecrement = (counterId) => {
    const newCount = counters.filter((c) => {
      if (c.id === counterId && c.value > 0) {
        c.value -= 1;
      }
      return c;
    });
    setCounters(newCount);
  };

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
