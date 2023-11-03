export interface IStory {
  title: string;
  score: number;
  by: string;
  time: number;
  url: string;
  kids: number[] | undefined;
  id: number;
  type: "story";
}

export interface IComment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
}
