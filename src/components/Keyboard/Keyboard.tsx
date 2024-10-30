import { useState } from "react";
import Key from "../Key/Key";

type KeyboardProps = {
  handleSubmit: (code: number) => void;
};

const Keyboard = ({ handleSubmit }: KeyboardProps) => {
  const values = "1234567890✔❌";
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleKeyPressed = (value: string) => {
    if (value === "✔" && currentValue) {
      handleSubmit(parseInt(currentValue));
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
      <input
        className="display"
        value={currentValue}
        onChange={() => {}}
      ></input>
      {values.split("").map((v, i) => (
        <Key value={v} key={i} handleKeyPressed={handleKeyPressed} />
      ))}
    </div>
  );
};

export default Keyboard;
