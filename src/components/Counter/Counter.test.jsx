import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithReduxStore } from '../../tests/helpers/renderWithReduxStore';
import { Counter } from './Counter';

global.prompt = vi.fn();

describe('Counter', () => {
  it('test render', () => {
    renderWithReduxStore(<Counter />);
    expect(screen.getByTestId('counter-title')).toBeInTheDocument();
  });
  it('click on increment', async () => {
    renderWithReduxStore(<Counter />);
    const incrementBtn = screen.getByTestId('increment-by-one-btn');
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent(1);
  });
  it('click on decrement', async () => {
    renderWithReduxStore(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-by-one-btn');
    await userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent(-1);
  });
  it('click on increment with initial store', async () => {
    renderWithReduxStore(<Counter />, { counter: { counter: 10 } });
    const incrementBtn = screen.getByTestId('increment-by-one-btn');
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent(11);
  });
  it('click on decrement by value', async () => {
    global.prompt.mockReturnValueOnce('5');
    renderWithReduxStore(<Counter />);
    const decrementByValueBtn = screen.getByTestId('decrement-by-value-btn');
    await userEvent.click(decrementByValueBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent(-5);
  });
  it('click on increment by value', async () => {
    global.prompt.mockReturnValueOnce('5');
    renderWithReduxStore(<Counter />);
    const incrementByValueBtn = screen.getByTestId('increment-by-value-btn');
    await userEvent.click(incrementByValueBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent(5);
  });
});
