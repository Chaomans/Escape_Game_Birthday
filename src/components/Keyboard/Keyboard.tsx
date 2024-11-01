import { useState } from "react";
import Key from "../Key/Key";
import styles from "./Keyboard.module.scss";

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
    <div className={styles.keyboard}>
      <input
        className={styles.display}
        value={currentValue}
        onChange={() => {}}
      ></input>
      {values.split("").map((v, i) => (
        <Key
          area={"n" + i}
          value={v}
          key={i}
          handleKeyPressed={handleKeyPressed}
        />
      ))}
    </div>
  );
};

export default Keyboard;
