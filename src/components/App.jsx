import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">To-Do-List</div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add Item"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
