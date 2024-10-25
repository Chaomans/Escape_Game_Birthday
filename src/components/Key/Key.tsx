type KeyProps = {
  value: string;
  handleKeyPressed: (value: string) => void;
};

const Key = ({ value, handleKeyPressed }: KeyProps) => {
  return <button onClick={() => handleKeyPressed(value)}>{value}</button>;
};

export default Key;
