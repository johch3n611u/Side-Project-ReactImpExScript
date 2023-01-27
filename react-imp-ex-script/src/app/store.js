import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pageReducer from '../pages/pageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pages: pageReducer,
  },
});
