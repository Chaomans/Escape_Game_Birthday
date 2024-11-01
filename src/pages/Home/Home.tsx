import { Link, useLocation } from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import { data } from "../../data/data";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const Home = () => {
  const location = useLocation();
  const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const { themes } = data;
  const getThemeIcon = (id: number) => {
    return themes.find((t) => t.id === Math.floor(id / 3) + 1)?.icon ?? "❓";
  };
  const shuffle = (arr: number[]) => {
    const shuffled = [...arr];
    for (let i = 0; i < arr.length; i++) {
      const rand = Math.floor(Math.random() * arr.length);
      [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
    }
    return shuffled;
  };
  const [shuffled, setShuffled] = useState<number[]>(shuffle(ids));
  const [treasuresOpen, setTreasuresOpen] = useState<boolean[]>();

  const checkTreasures = () => {
    const solved = localStorage.getItem("solvedIDs");
    const newtreasureOpen = [];
    if (solved !== null) {
      if (!["1", "2", "3"].some((el) => !JSON.parse(solved).includes(el))) {
        newtreasureOpen[0] = true;
      }
      if (!["4", "5", "6"].some((el) => !JSON.parse(solved).includes(el))) {
        newtreasureOpen[1] = true;
      }
      if (!["7", "8", "9"].some((el) => !JSON.parse(solved).includes(el))) {
        newtreasureOpen[2] = true;
      }
      setTreasuresOpen([...newtreasureOpen]);
    }
    return newtreasureOpen;
  };

  const imgPath = import.meta.env.PROD
    ? "assets/treasure.svg"
    : "/assets/treasure.svg";

  const isSolved = (id: number) => {
    const solved: string[] = JSON.parse(
      localStorage.getItem("solvedIDs") ?? "[]"
    );
    if (solved !== null) {
      return solved.findIndex((elem) => elem === "" + id) === -1 ? false : true;
    }
  };

  useEffect(() => {
    document.addEventListener("checkTreasures", (e: Event) => {
      e.preventDefault();
      console.log("CHECKING TREASURES", e);
      checkTreasures();
    });
    if (!shuffled) {
      setShuffled(shuffle(ids));
    }
    if (!treasuresOpen) {
      checkTreasures();
    }
  });
  return (
    <>
      <div className={styles.buttons}>
        {shuffled.map((id) => (
          <Link
            to={"/question/" + (id + 1)}
            state={{ background: location }}
            key={id}
            className={isSolved(id) ? styles.buttonSolved : styles.button}
          >
            {getThemeIcon(id)}
          </Link>
        ))}
      </div>
      <Timer limit={120} />
      {treasuresOpen && (
        <div className={styles.treasures}>
          <img
            className={treasuresOpen[0] ? styles.open : styles.close}
            src={imgPath}
            alt="treasure"
            onClick={() =>
              treasuresOpen[0]
                ? alert("🎁➡B5")
                : alert("Pas assez de couronnes...")
            }
          />
          <img
            className={treasuresOpen[1] ? styles.open : styles.close}
            src={imgPath}
            alt="treasure"
            onClick={() =>
              treasuresOpen[1] ? alert("🎁➡H8") : alert("Pas assez d'épées...")
            }
          />
          <img
            className={treasuresOpen[2] ? styles.open : styles.close}
            src={imgPath}
            alt="treasure"
            onClick={() =>
              treasuresOpen[2]
                ? alert("🎁➡A2")
                : alert("Pas assez de glaçons...")
            }
          />
        </div>
      )}
    </>
  );
};

export default Home;
