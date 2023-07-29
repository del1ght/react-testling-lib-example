import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Users } from './Users';
import axios from 'axios';

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
    const users = await screen.findAllByTestId('user-item');
    expect(axios.get).toBeCalledTimes(1);

    // why users.length is equal to 1 ??? screen.debug shows correct markup with 2 elements
    expect(users.length).toBe(2);
    screen.debug();
  });
});
