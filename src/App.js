import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newColor = color === "red" ? "blue" : "red";

  return (
    <main>
      <button
        style={{ backgroundColor: isButtonDisabled ? "gray" : color }}
        onClick={() => setColor(newColor)}
        disabled={isButtonDisabled}
      >
        Change to {newColor}
      </button>

      <label htmlFor="disable-color-button">Disable color button</label>
      <input
        type="checkbox"
        id="disable-color-button"
        checked={isButtonDisabled}
        onChange={(e) => setIsButtonDisabled(e.target.checked)}
      />
    </main>
  );
}

export default App;
