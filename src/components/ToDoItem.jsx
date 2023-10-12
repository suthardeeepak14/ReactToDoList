import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleChange() {
    setIsDone((presValue) => {
      return !presValue;
    });
  }
  return (
    <div onClick={handleChange}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
      ;
    </div>
  );
}

export default ToDoItem;
