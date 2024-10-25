import { useState } from "react";
import Key from "../Key/Key";

const Keyboard = () => {
  const values = "1234567890✔❌";

  const [currentValue, setCurrentValue] = useState<string>("");

  const handleKeyPressed = (value: string) => {
    if (value === "✔") {
      setCurrentValue("");
      return;
    }
    if (value === "❌") {
      setCurrentValue("");
      return;
    }
    setCurrentValue(currentValue + value);
  };

  return (
    <div className="keyboard">
      <input className="display" value={currentValue}></input>
      {values.split("").map((v, i) => (
        <Key value={v} key={i} handleKeyPressed={handleKeyPressed} />
      ))}
    </div>
  );
};

export default Keyboard;
