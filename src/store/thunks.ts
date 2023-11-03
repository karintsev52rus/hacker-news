import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStory } from "../types/appTypes";

const getStories = createAsyncThunk<
  number[],
  undefined,
  { rejectValue: string }
>("stories/getStories", async (_, { rejectWithValue }) => {
  const url =
    "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
  const response = await fetch(url);
  if (!response.ok) {
    return rejectWithValue("Ошибка при получении списка новостей");
  }
  const data = await response.json();
  const partData = data.slice(0, 100);
  return partData as number[];
});

const getStoryPageData = createAsyncThunk<
  IStory,
  number,
  { rejectValue: string }
>("stories/getStory", async (storyId, { rejectWithValue }) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`;
  const response = await fetch(url);
  if (!response.ok) {
    return rejectWithValue("Ошибка при получении новости");
  }
  const data = await response.json();
  return data as IStory;
});

export { getStories, getStoryPageData };
