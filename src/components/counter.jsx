import { getByPlaceholderText } from "@testing-library/dom";
import React from "react";

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? "Zero" : props.value;
  };
  const getBadgeClasses = () => {
    let clasess = "badge m-2 bg-";
    clasess += props.value === 0 ? "danger" : "primary";
    return clasess;
  };

  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <span
        style={{ fontSize: "30px", fontWeight: "bold" }}
        className={getBadgeClasses()}
      >
        {formValue()}
      </span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className={"btn btn-secondary btn-sm"}
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className={"btn btn-secondary btn-sm"}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
