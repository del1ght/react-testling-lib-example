import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.counter = state.counter + 1;
    },
    decrementByOne: (state) => {
      state.counter = state.counter - 1;
    },
    incrementByValue: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrementByValue: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});
