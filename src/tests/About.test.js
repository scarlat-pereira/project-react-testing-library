import React from 'react';
import { screen } from '@testing-library/react';

import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente <About.js />', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const h2 = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(h2).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const firstParagraph = screen.getByText(/this application simulates a pokédex, a/i);
    expect(firstParagraph).toBeInTheDocument();

    const secondParagraph = screen.getByText(/one can filter Pokémons by type, and see/i);
    expect(secondParagraph).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(url);
  });
});
