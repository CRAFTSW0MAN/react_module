import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PageProduct } from './PageProduct';
import { StoreProvider } from '../../store/configureStore';
import { catalogProducts } from '../../api/catalogProducts';


test('7.2.Make sure the detailed card component correctly displays the detailed card data', async () => {
  const number = 1;
  render(
    <StoreProvider>
      <MemoryRouter initialEntries={[`/product/${number}`]}>
        <Routes>
          <Route path="/product/:id" element={<PageProduct />} />
        </Routes>
      </MemoryRouter>
    </StoreProvider>
  );

  const filteredArr = catalogProducts.filter(
    (characterObj) => number === characterObj.id
  );
  const character = filteredArr.pop();

  const pageProductElement = screen.getByTestId('page-product');
  expect(pageProductElement).toBeInTheDocument();

  const title = await screen.findByTestId('Title');
  const description = await screen.findByTestId('Description');
  const brand = await screen.findByTestId('Brand');
  const category = await screen.findByTestId('Category');
  const rating = await screen.findByTestId('Rating');
  const price = await screen.findByTestId('Price');
  const stock = await screen.findByTestId('Stock');
  const discountPercentage = await screen.findByTestId('DiscountPercentage');
  const image = await screen.findByTestId('card-image');

  if (character) {
    expect(title).toHaveTextContent(character.title);
    expect(description).toHaveTextContent(character.description);
    expect(brand).toHaveTextContent(character.brand);
    expect(category).toHaveTextContent(character.category);
    expect(rating).toHaveTextContent(character.rating);
    expect(price).toHaveTextContent(character.price);
    expect(stock).toHaveTextContent(character.stock);
    expect(discountPercentage).toHaveTextContent(character.discountPercentage);
  }
  expect(image).toHaveAttribute('src', character?.images[0]);
});

  test('7.3.Ensure that clicking the close button hides the component', async () => {
    render(
      <StoreProvider>
        <MemoryRouter initialEntries={[`/product/1`]}>
          <Routes>
            <Route path="/product/:id" element={<PageProduct />} />
          </Routes>
        </MemoryRouter>
      </StoreProvider>
    );

    const pageProductElement = screen.getByTestId('page-product');
    expect(pageProductElement).toBeInTheDocument();

    const button = await screen.findByTestId('DeleteCard');
    fireEvent.click(button);
    expect(screen.queryByTestId('page-product')).toBeNull();
  });
