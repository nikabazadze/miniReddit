import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/Search/SearchSlice';
import subredditsReducer from '../features/SubReddits/SubRedditsSlice';
import feedReducer from '../features/Feed/FeedSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    subreddits: subredditsReducer,
    search: searchReducer
  },
});
