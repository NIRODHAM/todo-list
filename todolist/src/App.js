import { useState } from "react";
import Sunset from "./Sunset.jpg";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  function handle(event) {
    setInputText(event.target.value);
  }

  function addText() {
    if (inputText === "") return;

    setList(
      [{ text: inputText, done: false }].concat(list)
    );
    setInputText("");
  }

  function toggleDone(index) {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  }

  function deleteItem(index) {
    setList(
      list.filter(function (_, i) {
        return i !== index;
      })
    );
  }

  return (
    <div className="bg-container">
      <img src={Sunset} alt="bg" className="bg-img" />

      <div className="todo-box">
        <p id="header">Todo-List</p>

        <div className="add-task">
          <input
            type="text"
            value={inputText}
            onChange={handle}
            placeholder="Add your task"
          />
          <button onClick={addText}>ADD</button>
        </div>

        {list.map(function (item, index) {
          return (
            <div key={index} className="output">
              <input
                type="radio"
                className="radio"
                checked={item.done}
                onClick={function () {
                  toggleDone(index);
                }}
              />

              <span className={item.done ? "done" : "task-text"}>
                {item.text}
              </span>

              <span
                className="material-symbols-outlined dlt-btn"
                onClick={function () {
                  deleteItem(index);
                }}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
