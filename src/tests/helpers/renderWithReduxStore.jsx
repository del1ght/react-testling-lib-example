import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store';

export const renderWithReduxStore = (component, initialState = {}) => {
  return render(
    <Provider store={createReduxStore(initialState)}>{component}</Provider>
  );
};
