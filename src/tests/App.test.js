import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa os links no topo da aplicação e o correto roteamento', () => {
  test('O primeiro link deve possuir o texto Home e rotear para "./"', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('O segundo link deve possuir o texto About e rotear para "./about"', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', {
      name: /about/i,
    });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('O terceiro link deve possuir Favorite Pokémons e rotear para "./favorites"', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
