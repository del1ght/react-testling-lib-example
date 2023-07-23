import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('simple test cases', () => {
    render(<App />);

    //getBy, getAllBy - must return an element(s), throws error if no elements matched
    //findBy, findAllBy - returns a Promise which resolves when element is found (use with async)
    //queryBy, queryAllBy - returns an element, and return null if no elements match, useful for asserting element that is not present

    const textElem = screen.getByText(/test/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);

    expect(textElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug();
  });

  it('non-existent component', () => {
    render(<App />);

    const nonExistentElem = screen.queryByText(
      /there is no element with this text/i
    );

    expect(nonExistentElem).not.toBeInTheDocument();
  });

  it('delayed component', async () => {
    render(<App />);

    const delayedElem = await screen.findByText(/i have delayed data/i);

    expect(delayedElem).toBeInTheDocument();
  });

  it('component have styles', () => {
    render(<App />);

    const divWithStyles = screen.getByTestId('main-block');

    expect(divWithStyles).toHaveStyle('display: flex; gap: 20px');
  });

  it('click event', () => {
    render(<App />);

    const toggleBtn = screen.getByTestId('toggle-button');

    expect(screen.queryByTestId('toggle-block')).toBeNull();

    fireEvent.click(toggleBtn);

    expect(screen.queryByTestId('toggle-block')).toBeInTheDocument();
  });

  it('artificial input event', () => {
    render(<App />);

    const inputContent = 'test';

    const input = screen.getByPlaceholderText(/input value1/i);

    expect(screen.getByTestId('input-text')).toContainHTML('');

    // artificial event
    fireEvent.input(input, { target: { value: inputContent } });

    expect(screen.getByTestId('input-text')).toContainHTML(inputContent);
  });

  it('user input event', () => {
    render(<App />);

    const inputContent = 'test';

    const input = screen.getByPlaceholderText(/input value1/i);

    expect(screen.getByTestId('input-text')).toContainHTML('');

    // close to real user events
    userEvent.type(input, inputContent);

    expect(screen.getByTestId('input-text')).toContainHTML(inputContent);
  });
});
