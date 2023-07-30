import { act, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';
import { Users } from './Users';

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
    render(<Users />);
    await act(() => Promise.resolve());
    const users = await screen.findAllByTestId('user-item');
    expect(axios.get).toBeCalledTimes(1);
    expect(users.length).toBe(2);
    screen.debug();
  });

  // it('users length', async () => {
  //   axios.get.mockReturnValue(response);
  //   render(<Users />);
  //   screen
  //     .findAllByTestId('user-item')
  //     .then((users) => expect(users.length).toBe(2));
  // });
  // it('users length', async () => {
  //   axios.get.mockReturnValue(response);
  //   render(<Users />);

  //   await waitFor(async () => {
  //     const users = await screen.findAllByTestId('user-item');
  //     expect(users.length).toBe(2);
  //   });
  // });
});
