import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente <Pokemon.js />', () => {
  test('É renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img).toHaveAttribute('src', url);
  });

  test('O card contém um link de navegação para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(details);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('Existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(details);

    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(checkbox);

    const img = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
