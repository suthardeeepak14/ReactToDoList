import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
  }
  function delItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">To-Do-List</div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={delItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
