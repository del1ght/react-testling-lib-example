import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducers/counterReducer/counterReducer';

export const createReduxStore = (initialState) => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
    preloadedState: initialState,
  });
};
