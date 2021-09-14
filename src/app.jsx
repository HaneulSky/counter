import React, { useState } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
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
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
