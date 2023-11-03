import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { getStories, getStoryPageData } from "./thunks";
import { IStory, IComment } from "../types/appTypes";

export interface IStoriesState {
  stories: number[];
  currentStory: undefined | IStory;
  currentComment: undefined | IComment;
  rootComments: number[];
  loading: boolean;
  error: boolean;
  message: string;
}

const initialState: IStoriesState = {
  stories: [],
  currentStory: undefined,
  currentComment: undefined,
  rootComments: [],
  loading: false,
  error: false,
  message: "",
};

export const setCurrentStory = createAction<IStory>("stories/setCurrentStory");

const storiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getStories.pending, (state) => {
      state.loading = true;
    })
    .addCase(getStories.rejected, (state, { payload }) => {
      state.error = true;
      state.loading = false;
      state.message = payload;
    })
    .addCase(getStories.fulfilled, (state, { payload }) => {
      state.error = false;
      state.loading = false;
      state.stories = payload;
    })
    .addCase(getStoryPageData.pending, (state) => {
      state.loading = true;
    })
    .addCase(getStoryPageData.rejected, (state, { payload }) => {
      state.error = true;
      state.loading = false;
      state.message = payload;
    })
    .addCase(getStoryPageData.fulfilled, (state, { payload }) => {
      state.error = false;
      state.loading = false;
      state.currentStory = payload;
    })
    .addCase(setCurrentStory, (state, action: PayloadAction<IStory>) => {
      state.currentStory = action.payload;
    });
});

export { storiesReducer };
