import { useNavigate, useParams } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";
import { data } from "../../data/data";
import { Answer, Problem, Question, Theme } from "../../utils/types";
import { useEffect, useState } from "react";

export const ProblemModal = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState<Problem>();
  const navigate = useNavigate();
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const handleSubmit = (code: number) => {
    if (code === problem?.answer.code) {
      console.log(`Question ${id} solved`);
      const solved: string[] =
        localStorage.getItem("solvedIDs") === null
          ? []
          : JSON.parse(localStorage.getItem("solvedIDs") ?? "[]");
      localStorage.setItem("solvedIDs", JSON.stringify([...solved, id]));
      setIsSolved(true);
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
      console.log(typeof solved);
      setIsSolved(solved.includes(id));
    }
  }, [id]);

  return (
    <>
      {problem && (
        <div className="problem">
          <p className="question">{problem.question.text}</p>
          {problem.question.isSong &&
            problem.question.songText?.map((line, ind) => (
              <p key={ind}>{line}</p>
            ))}
          {!isSolved && <Keyboard handleSubmit={handleSubmit} />}
          <button onClick={() => navigate("/")}>Close</button>
        </div>
      )}
      {!problem && <div className="NotFound">NO</div>}
    </>
  );
};
