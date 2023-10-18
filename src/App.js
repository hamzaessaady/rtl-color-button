import { useState } from "react";
import { COLORS } from "./App.constants";
import { formatColorName } from "./App.services";
import "./App.css";

function App() {
  const [color, setColor] = useState(COLORS.initial);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newColor = color === COLORS.initial ? COLORS.alternate : COLORS.initial;
  return (
    <main>
      <button
        style={{ backgroundColor: isButtonDisabled ? COLORS.disabled : color }}
        onClick={() => setColor(newColor)}
        disabled={isButtonDisabled}
      >
        Change to {formatColorName(newColor)}
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
