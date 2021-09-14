import { getByPlaceholderText } from "@testing-library/dom";
import React from "react";

const Counter = ({ value, id, name, onDecrement, onIncrement, onDelete }) => {
  const formValue = () => {
    return value === 0 ? "Zero" : value;
  };
  const getBadgeClasses = () => {
    let clasess = "badge m-2 bg-";
    clasess += value === 0 ? "danger" : "primary";
    return clasess;
  };

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <span
        style={{ fontSize: "30px", fontWeight: "bold" }}
        className={getBadgeClasses()}
      >
        {formValue()}
      </span>
      <button
        onClick={() => onIncrement(id)}
        className={"btn btn-secondary btn-sm"}
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className={"btn btn-secondary btn-sm"}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
