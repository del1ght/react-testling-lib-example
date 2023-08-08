import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../../store/reducers/counterReducer/counterReducer';
import { getCounterValue } from '../../store/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { decrementByOne, decrementByValue, incrementByOne, incrementByValue } =
    counterSlice.actions;

  const handleDecrementByOne = () => {
    dispatch(decrementByOne());
  };
  const handleDecrementByValue = () => {
    const value = Number(prompt('enter a number'));
    dispatch(decrementByValue(value));
  };

  const handleIncrementByOne = () => {
    dispatch(incrementByOne());
  };
  const handleIncrementByValue = () => {
    const value = Number(prompt('enter a number'));
    dispatch(incrementByValue(value));
  };

  return (
    <div style={{ marginBlock: '16px' }}>
      <p data-testid='counter-title'>{counter}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          data-testid='decrement-by-one-btn'
          onClick={handleDecrementByOne}
        >
          -
        </button>
        <button
          data-testid='decrement-by-value-btn'
          onClick={handleDecrementByValue}
        >
          - (val)
        </button>
        <button
          data-testid='increment-by-value-btn'
          onClick={handleIncrementByValue}
        >
          + (val)
        </button>
        <button
          data-testid='increment-by-one-btn'
          onClick={handleIncrementByOne}
        >
          +
        </button>
      </div>
    </div>
  );
};
