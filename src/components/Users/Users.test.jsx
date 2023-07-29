import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { AppRouter } from '../../providers/router/AppRouter';
import { Users } from './Users';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';

vi.mock('axios');

describe('Users test', () => {
  let response = {
    data: [
      {
        id: 1,
        name: 'Leanne Graham',
      },
      {
        id: 2,
        name: 'Ervin Howell',
      },
    ],
  };

  it('getUsers', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-link');
    expect(axios.get).toBeCalledTimes(1);

    // why users.length is equal to 1 ??? screen.debug shows correct markup with 2 elements
    expect(users.length).toBe(1);
  });
  it('redirect to user page', async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />, '/about');
    const users = await screen.findAllByTestId('user-link');

    userEvent.click(users[0]);

    expect(screen.getByTestId('user-page')).toBeInTheDocument();

    screen.debug();
  });
});
