import { configureStore } from "@reduxjs/toolkit";
import { storiesReducer } from "./storyReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: storiesReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
