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

    setList([inputText].concat(list));
    setInputText("");
  }

  return (
    <div className="bg-container">
      <img src={Sunset} alt="bg" className="bg-img" />

      <div className="todo-box">
        {/* input + button */}
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
    <p key={index} className="output">
      <input type="radio" className="radio" />
      {item}
    </p>
  );
})}

        
    
      </div>
    </div>
  );
}

export default App;
