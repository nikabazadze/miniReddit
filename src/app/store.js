import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/Search/SearchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer
  },
});
