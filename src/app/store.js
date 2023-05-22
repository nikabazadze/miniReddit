import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/Search/SearchSlice';
import subredditsReducer from '../features/SubReddits/SubRedditsSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    search: searchReducer
  },
});
