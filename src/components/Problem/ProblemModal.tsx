import { useNavigate, useParams } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";
import { data } from "../../data/data";
import { Answer, Problem, Question, Theme } from "../../utils/types";
import { useEffect, useState } from "react";

export const ProblemModal = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState<Problem>();
  const navigate = useNavigate();

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
    }
  }, [id]);

  return (
    <>
      {problem && (
        <div className="problem">
          <p className="question">{problem.question.text}</p>
          <Keyboard />
          <button onClick={() => navigate(-1)}>Close</button>
        </div>
      )}
      {!problem && <div className="NotFound">NO</div>}
    </>
  );
};
