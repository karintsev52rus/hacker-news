import { RootState } from ".";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const storiesSelector = (state: RootState) => {
  return state.stories;
};

const storySelector = (state: RootState) => {
  return state.currentStory;
};

const errorSelector = (state: RootState) => {
  return state.error;
};

const messageSelector = (state: RootState) => {
  return state.message;
};

const loadingSelector = (state: RootState) => {
  return state.loading;
};

const commentSelector = (state: RootState) => {
  const { loading, error, currentComment, rootComments } = state;
  const selector = { loading, error, currentComment, rootComments };
  return selector;
};

export {
  storiesSelector,
  commentSelector,
  loadingSelector,
  storySelector,
  errorSelector,
  messageSelector,
};
