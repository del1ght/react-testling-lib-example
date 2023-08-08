import { describe, expect, it } from 'vitest';
import { counterSlice } from './counterReducer';

describe('counter reducer', () => {
  const initialState = { counter: 0 };

  it('initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = initialState;
    expect(counterSlice.reducer(initialState, action)).toEqual(expectedState);
  });
  it('increment by one', () => {
    const action = counterSlice.actions.incrementByOne();
    const expectedState = { ...initialState, counter: 1 };
    expect(counterSlice.reducer(initialState, action)).toEqual(expectedState);
  });
  it('multiple increments by one', () => {
    const incrementAction = counterSlice.actions.incrementByOne();
    const expectedStateAfterTwoIncrements = { ...initialState, counter: 2 };
    const stateAfterOneIncrement = counterSlice.reducer(
      initialState,
      incrementAction
    );
    const stateAfterSecondIncrement = counterSlice.reducer(
      stateAfterOneIncrement,
      incrementAction
    );
    expect(stateAfterSecondIncrement).toEqual(expectedStateAfterTwoIncrements);
  });
  it('decrement by one', () => {
    const action = counterSlice.actions.decrementByOne();
    const expectedState = { ...initialState, counter: -1 };
    expect(counterSlice.reducer(initialState, action)).toEqual(expectedState);
  });
  it('multiple decrements by one', () => {
    const decrementAction = counterSlice.actions.decrementByOne();
    const expectedStateAfterTwoIDecrements = { ...initialState, counter: -2 };
    const stateAfterOneIncrement = counterSlice.reducer(
      initialState,
      decrementAction
    );
    const stateAfterSecondIncrement = counterSlice.reducer(
      stateAfterOneIncrement,
      decrementAction
    );
    expect(stateAfterSecondIncrement).toEqual(expectedStateAfterTwoIDecrements);
  });
  it('increment by value', () => {
    const action = counterSlice.actions.incrementByValue(5);
    const expectedState = { ...initialState, counter: 5 };
    expect(counterSlice.reducer(initialState, action)).toEqual(expectedState);
  });
  it('decrement by value', () => {
    const action = counterSlice.actions.decrementByValue(5);
    const expectedState = { ...initialState, counter: -5 };
    expect(counterSlice.reducer(initialState, action)).toEqual(expectedState);
  });
  it('increment by value multiple times', () => {
    const { incrementByValue } = counterSlice.actions;
    const expectedStateAfterTwoIncrements = { ...initialState, counter: 8 };

    const stateAfterOneIncrement = counterSlice.reducer(
      initialState,
      incrementByValue(5)
    );
    const stateAfterTwoIncrements = counterSlice.reducer(
      stateAfterOneIncrement,
      incrementByValue(3)
    );
    expect(stateAfterTwoIncrements).toEqual(expectedStateAfterTwoIncrements);
  });
  it('decrement by value multiple times', () => {
    const { decrementByValue } = counterSlice.actions;
    const expectedStateAfterTwoIncrements = { ...initialState, counter: -8 };

    const stateAfterOneIncrement = counterSlice.reducer(
      initialState,
      decrementByValue(5)
    );
    const stateAfterTwoIncrements = counterSlice.reducer(
      stateAfterOneIncrement,
      decrementByValue(3)
    );
    expect(stateAfterTwoIncrements).toEqual(expectedStateAfterTwoIncrements);
  });
});
