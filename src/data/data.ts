import { Answer, Question, Theme } from "../utils/types"

export const data: {
  questions: Question[],
  answers: Answer[],
  themes: Theme[]
} = {
  questions: [
    {
      id: 1,
      text: "En quelle année est sorti le premier film de la saga « Le Roi Lion » ?",
      theme_id: 1,
      isSong: false,
      isQuizz: false,
    },
    {
      id: 2,
      text: "Complétez les paroles:",
      theme_id: 1,
      isSong: true,
      isQuizz: false,
      songText: ["Toi et moi sommes pareils", "Tout comme _ _ _ _ _"]
    },
    {
      id: 3,
      text: "De quelle couleur est l'insecte mangé par Timon avant Hakuna Matata ?",
      theme_id: 1,
      isSong: false,
      isQuizz: false
    },
    {
      id: 4,
      text: "Complétez les paroles:",
      theme_id: 2,
      isSong: true,
      isQuizz: false,
      songText: [
        "J'aurai dû me mettre au _",
        "Salue tous _ _ pour moi",
        "Je n'aurai pas du sécher les _ _ _"
      ]
    },
    {
      id: 5,
      text: "Complétez les paroles:",
      theme_id: 2,
      isSong: true,
      isQuizz: false,
      songText: [
        "Moi qu'elle _ _ _ qu'elle _ _",
        "J'suis _ _",
        "Du moment qu'elle _ _ _ _",
        "Boeuf, _, _, mmh"
      ]
    },
    {
      id: 6,
      text: "Complétez les paroles:",
      theme_id: 2,
      isSong: true,
      isQuizz: false,
      songText: [
        "Je cherche en ma _",
        "Qui je suis pour _",
        "_ _ _ _",
        "Où _ _ _'_",
        "Dans _ _ d'_",
        "_ _ je vais _?"
      ]
    },
    {
      id: 7,
      text: "Quels desserts seraient choisis par Scrat ?",
      theme_id: 3,
      isSong: false,
      isQuizz: true,
      quizzItems: [
        {
          imagePath: "",
          altText: ""
        },
      ]
    },

  ],
  answers: [
    {
      id: 1,
      code: 1994,
      theme_id: 1,
    },
    {
      id: 2,
      code: 212521,
      theme_id: 1,
    },
    {
      id: 3,
      code: 25224,
      theme_id: 1,
    },
    {
      id: 4,
      code: 653,
      theme_id: 2,
    },
    {
      id: 5,
      code: 97452,
      theme_id: 2,
    },
    {
      id: 6,
      code: 762369,
      theme_id: 2,
    },
    {
      id: 7,
      code: 2,
      theme_id: 3,
    },
    {
      id: 8,
      code: 1,
      theme_id: 3,
    },
    {
      id: 9,
      code: 3,
      theme_id: 3,
    },
  ],
  themes: [
    {
      id: 1,
      name: "Le Roi Lion",
      icon: "👑"
    },
    {
      id: 2,
      name: "Mulan",
      icon: "🗡"
    },
    {
      id: 3,
      name: "L'Âge de Glace'",
      icon: "🧊"
    },
  ]
}