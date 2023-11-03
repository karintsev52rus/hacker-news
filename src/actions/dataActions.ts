import { IStory, IComment } from "../types/appTypes";

const getStory = async (storyId: number) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data as IStory;
  }
  return new Error("Ошибка при получении новости");
};

const getComment = async (commentId: number) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data as IComment;
  }
  return new Error("Ошибка при получении комментария");
};

export { getComment, getStory };
