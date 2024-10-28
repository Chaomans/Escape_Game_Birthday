export type QuizzItem = {
  imagePath: string,
  altText: string
}

export type Question = {
  id: number,
  text: string,
  theme_id: number,
  isSong: boolean,
  isQuizz: boolean,
  songText?: string[],
  quizzItems?: QuizzItem[],
  imagePath?: string
}

export type Answer = {
  id: number,
  code: number,
  theme_id: number
}

export type Theme = {
  id: number,
  name: string,
  icon: string
};

export type Problem = {
  question: Question,
  answer: Answer,
  theme: Theme
}