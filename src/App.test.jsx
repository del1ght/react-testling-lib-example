import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App', () => {
  it('initial route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const mainPage = screen.getByTestId('main-page');
    expect(mainPage).toBeInTheDocument();
  });

  it('about page link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const aboutPageBtn = screen.getByTestId('about-link');
    fireEvent.click(aboutPageBtn);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('from about page to main page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    const mainPageBtn = screen.getByTestId('main-link');
    fireEvent.click(mainPageBtn);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('not found page test', async () => {
    render(
      <MemoryRouter initialEntries={['/thisisnotrealpage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
