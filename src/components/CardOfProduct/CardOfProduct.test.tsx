import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardOfProduct } from './CardOfProduct';

describe('PokemonCard', () => {
  it('The card component renders the relevant card data', async () => {
    const data = { title: 'Phone 10', image: 'url' };

    render(
      <MemoryRouter>
        <CardOfProduct title={data.title} image={data.image} />
      </MemoryRouter>
    );

    const title = screen.getByText(data.title);
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText(data.title);
    expect(image).toHaveAttribute('src', data.image);
  });
});
