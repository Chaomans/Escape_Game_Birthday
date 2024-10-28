import { useState } from "react";

type TimerProps = {
  limit: number;
};

const Timer = ({ limit }: TimerProps) => {
  const [endTime, setEndTime] = useState<number>(
    localStorage.getItem("endTime") === null
      ? -1
      : parseInt(localStorage.getItem("endTime") ?? "")
  );
  const [lasted, setLasted] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(
    localStorage.getItem("isTimerRunning") === null
      ? false
      : JSON.parse(localStorage.getItem("isTimerRunning") ?? "false")
  );

  const timerVar: { timer: NodeJS.Timeout | null; last: number } = {
    timer: null,
    last: 0,
  };

  const onSetTimerOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true;
    const newEndTime: number = Date.now() + limit * 1000;
    localStorage.setItem("endTime", newEndTime.toString());
    setEndTime(newEndTime);
    timerVar.timer = setInterval(() => {
      const newLasted = endTime - Date.now();
      if (newLasted <= 0) {
        clearInterval(timerVar.timer as NodeJS.Timeout);
        setLasted(0);
        return;
      }
      setLasted(newLasted);
    }, 1000);
    localStorage.setItem("isTimerRunning", "true");
    setIsRunning(true);
  };

  const displayTime = (n: number) => {
    const minutes = Math.floor((n % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((n % (1000 * 60)) / 1000);
    return `${minutes}:${seconds}`;
  };

  const onReset = () => {
    localStorage.clear();
    localStorage.setItem("solvedIDs", "[]");
    clearInterval(timerVar.timer as NodeJS.Timeout);
    setEndTime(0);
    setIsRunning(false);
    setLasted(0);
  };

  if (isRunning) {
    timerVar.timer = setInterval(() => {
      const newLasted = endTime - Date.now();
      if (newLasted <= 0) {
        clearInterval(timerVar.timer as NodeJS.Timeout);
        setLasted(0);
        return;
      }
      setLasted(newLasted);
    }, 1000);
  }

  return (
    <div className="timer">
      <p>{displayTime(lasted)}</p>
      <button onClick={(e) => onSetTimerOn(e)}>Start</button>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
};

export default Timer;
