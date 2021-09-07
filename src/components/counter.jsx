import { getByPlaceholderText } from "@testing-library/dom";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };
  const getBageClasses = () => {
    let clasess = "badge m-2 bg-";
    clasess += count === 0 ? "danger" : "primary";
    return clasess;
  };
  const renderTags = () => {
    if (tags.length === 0) return "Теги не найдены";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      {tags.length === 0 && "Теги не найдены"}
      {renderTags()}
      <span
        style={{ fontSize: "30px", fontWeight: "bold" }}
        className={getBageClasses()}
      >
        {formCount()}
      </span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className={"btn btn-secondary btn-sm"}
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className={"btn btn-secondary btn-sm"}
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
