import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [display, setDisplay] = useState("");

  function addText(event) {
    setInputText(event.target.value);
  }

  function displayText() {
    setDisplay(inputText);
  }

  return (
    <div>
      <input type="text" onChange={addText} />
      <button onClick={displayText}>click</button>

      <p>{display}</p>
    </div>
  );
}

export default App;
