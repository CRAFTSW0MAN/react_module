import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { AllCardMain } from '../../components/AllCardMain/AllCardMain';
import { IdataProduct } from '../../type/interfaces..interface';
import { MainContext } from '../MainPage/Main.Page';
import { PageProduct } from './PageProduct';

import * as api from '../../api/Api';

describe('PageProduct', () => {
  vi.spyOn(api, 'ApiProduct').mockImplementation((): Promise<IdataProduct> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          brand: 'Sumsung',
          category: 'telephone',
          rating: '4',
          price: '99.99',
          stock: '10',
          discountPercentage: '20',
          description: 'dwadwd wdawda',
          images: ['image1.jpg', 'image2.jpg'],
          title: 'Phone90',
          id: '2',
          thumbnail: 'pop',
        });
      }, 1000);
    });
  });
  test('7.1.Ensure that the card component renders the relevant card datay', async () => {
    render(
      <BrowserRouter>
        <PageProduct />
      </BrowserRouter>
    );

    const groguSpinner = screen.getByTestId('grogu-spinner');
    expect(groguSpinner).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId('section-grogu')).not.toBeInTheDocument()
    );
  });

  test('7.2.Make sure the detailed card component correctly displays the detailed card data', async () => {
    const arrProducts = [
      {
        brand: 'Product 1',
        category: 'Product 1',
        description: 'Product 1',
        discountPercentage: 'Product 1',
        id: '1',
        images: ['image1.jpg'],
        price: 'Product 1',
        rating: 'Product 1',
        stock: 'Product 1',
        thumbnail: 'Product 1',
        title: 'Product 1',
      },
    ];

    const countPage = 1;
    const countItemData = 1;
    const dataSearch = 'test query';
    const selectedValue = 10;
    const handleUpdatePage = (page: number) => {
      console.log(page);
    };
    const handleChangeSelect = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      console.log(event);
    };
    const handleUpdateSearch = (search: string) => {
      console.log(search);
    };
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<AllCardMain />} />
          <Route path="/product/:id" element={<PageProduct />} />
        </Routes>
      </MemoryRouter>,
      {
        wrapper: ({ children }) => (
          <MainContext.Provider
            value={{
              countPage,
              countItemData,
              dataSearch,
              selectedValue,
              arrProducts,
              handleUpdatePage,
              handleChangeSelect,
              handleUpdateSearch,
            }}
          >
            {children}
          </MainContext.Provider>
        ),
      }
    );

    const cardElement = screen.getByTestId('card-of-list');
    fireEvent.click(cardElement);

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

    expect(title).toHaveTextContent('Phone90');
    expect(description).toHaveTextContent('dwadwd wdawda');
    expect(brand).toHaveTextContent('Sumsung');
    expect(category).toHaveTextContent('telephone');
    expect(rating).toHaveTextContent('4');
    expect(price).toHaveTextContent('99.99');
    expect(stock).toHaveTextContent('10');
    expect(discountPercentage).toHaveTextContent('20');

    expect(image).toHaveAttribute('src', 'image1.jpg');
  });

  test('7.3.Ensure that clicking the close button hides the component', async () => {
    const arrProducts = [
      {
        brand: 'Product 1',
        category: 'Product 1',
        description: 'Product 1',
        discountPercentage: 'Product 1',
        id: '1',
        images: ['image1.jpg'],
        price: 'Product 1',
        rating: 'Product 1',
        stock: 'Product 1',
        thumbnail: 'Product 1',
        title: 'Product 1',
      },
    ];

    const countPage = 1;
    const countItemData = 1;
    const dataSearch = 'test query';
    const selectedValue = 10;
    const handleUpdatePage = (page: number) => {
      console.log(page);
    };
    const handleChangeSelect = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      console.log(event);
    };
    const handleUpdateSearch = (search: string) => {
      console.log(search);
    };
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<AllCardMain />} />
          <Route path="/product/:id" element={<PageProduct />} />
        </Routes>
      </MemoryRouter>,
      {
        wrapper: ({ children }) => (
          <MainContext.Provider
            value={{
              countPage,
              countItemData,
              dataSearch,
              selectedValue,
              arrProducts,
              handleUpdatePage,
              handleChangeSelect,
              handleUpdateSearch,
            }}
          >
            {children}
          </MainContext.Provider>
        ),
      }
    );

    const cardElement = screen.getByTestId('card-of-list');
    fireEvent.click(cardElement);

    const pageProductElement = screen.getByTestId('page-product');
    expect(pageProductElement).toBeInTheDocument();

    const button = screen.findByTestId('DeleteCard');
    fireEvent.click(await button);
    expect(screen.queryByTestId('page-product')).toBeNull();
  });
});
