import { useNavigate, useParams } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";
import { data } from "../../data/data";
import { Answer, Problem, Question, Theme } from "../../utils/types";
import { useEffect, useState } from "react";
import styles from "./ProblemModal.module.scss";

export const ProblemModal = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState<Problem>();
  const navigate = useNavigate();
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const treasuresEvent = new Event("checkTreasures", { cancelable: true });

  const handleSubmit = (code: number) => {
    if (code === problem?.answer.code) {
      console.log(`Question ${id} solved`);
      const solved: string[] =
        localStorage.getItem("solvedIDs") === null
          ? []
          : JSON.parse(localStorage.getItem("solvedIDs") ?? "[]");
      localStorage.setItem("solvedIDs", JSON.stringify([...solved, id]));
      setIsSolved(true);
      document.dispatchEvent(treasuresEvent);
      return;
    }
    console.log("WRONG");
  };

  useEffect(() => {
    if (id) {
      const newQuestion = data.questions.find(
        (q) => q.id === parseInt(id)
      ) as Question;
      const newAnswer = data.answers.find(
        (a) => a.id === parseInt(id)
      ) as Answer;
      const newTheme = data.themes.find(
        (t) => t.id === newQuestion.theme_id
      ) as Theme;
      setProblem({
        question: newQuestion,
        answer: newAnswer,
        theme: newTheme,
      });
      const solved: string =
        localStorage.getItem("solvedIDs") === null
          ? ""
          : JSON.parse(localStorage.getItem("solvedIDs") ?? "");
      setIsSolved(solved.includes(id));
    }
  }, [id]);

  return (
    <>
      {problem && (
        <div className={isSolved ? styles.problemSolved : styles.problem}>
          <p className={styles.question}>{problem.question.text}</p>
          {problem.question.isSong &&
            problem.question.songText?.map((line, ind) => (
              <p className={styles.songText} key={ind}>
                {line}
              </p>
            ))}
          {problem.question.isQuizz && (
            <div className={styles.items}>
              {problem.question.quizzItems?.map((item, ind) => (
                <div className={styles.quizzItem}>
                  <img
                    className={styles.img}
                    src={"../assets/" + item.imagePath}
                    alt={item.altText}
                  />
                  <p className={styles.p}>{ind + 1}</p>
                </div>
              ))}
            </div>
          )}
          {!isSolved && <Keyboard handleSubmit={handleSubmit} />}
          <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => navigate("/")}>
              Fermer
            </button>
          </div>
        </div>
      )}
      {!problem && <div className="NotFound">NO</div>}
    </>
  );
};
