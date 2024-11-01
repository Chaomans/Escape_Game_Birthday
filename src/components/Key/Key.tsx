import styles from "./Key.module.scss";

type KeyProps = {
  value: string;
  handleKeyPressed: (value: string) => void;
  area: string;
};

const Key = ({ value, handleKeyPressed, area }: KeyProps) => {
  return (
    <button
      className={styles.button}
      style={{ gridArea: area }}
      onClick={() => handleKeyPressed(value)}
    >
      {value}
    </button>
  );
};

export default Key;
