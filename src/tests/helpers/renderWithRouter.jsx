import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../providers/router/AppRouter';
import { render } from '@testing-library/react';

export const renderWithRouter = (component, initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
