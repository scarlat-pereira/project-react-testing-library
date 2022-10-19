import React from 'react';
import { screen } from '@testing-library/react';

import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um heading h2 com o texto correto', () => {
    renderWithRouter(<NotFound />);

    const h2NotFound = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(h2NotFound).toBeInTheDocument();
  });

  test('Testa se a página contém a imagem com a URL correta', () => {
    renderWithRouter(<NotFound />);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(url);
  });
});
