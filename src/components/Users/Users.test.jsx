import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Users } from './Users';

global.fetch = vi.fn();

function createFetchResponse(data) {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
}

describe('Users test', () => {
  let response = [
    {
      id: 1,
      name: 'Leanne Graham',
    },
    {
      id: 2,
      name: 'Ervin Howell',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
    },
  ];

  it('getusers', async () => {
    fetch.mockResolvedValue(createFetchResponse(response));
    render(<Users />);
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const test = await res.json();
    console.log(test);

    // const users = await screen.findAllByTestId('user-item');
    // expect(fetch).toBeCalledTimes(1);
    // expect(users.length).toBe(1);
    // screen.debug();
  });
});
