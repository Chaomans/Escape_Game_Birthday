import { Link, useLocation } from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import { data } from "../../data/data";
import { useEffect, useState } from "react";

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
      {shuffled.map((id) => (
        <Link
          to={"/question/" + (id + 1)}
          state={{ background: location }}
          key={id}
        >
          {getThemeIcon(id)}
        </Link>
      ))}
      <Timer limit={120} />
      {treasuresOpen && (
        <div className="treasures">
          <img
            className={treasuresOpen[0] ? "open" : ""}
            src="/assets/treasure.svg"
            alt="treasure"
            onClick={() =>
              treasuresOpen[0]
                ? alert("🎁➡B5")
                : alert("Pas assez de couronnes...")
            }
          />
          <img
            className={treasuresOpen[1] ? "open" : ""}
            src="/assets/treasure.svg"
            alt="treasure"
            onClick={() =>
              treasuresOpen[1] ? alert("🎁➡H8") : alert("Pas assez d'épées...")
            }
          />
          <img
            className={treasuresOpen[2] ? "open" : ""}
            src="/assets/treasure.svg"
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
