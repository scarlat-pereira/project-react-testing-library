import React from 'react';
import { screen } from '@testing-library/react';

import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('testa o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const notFound = screen.getByText(/no favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });
});
