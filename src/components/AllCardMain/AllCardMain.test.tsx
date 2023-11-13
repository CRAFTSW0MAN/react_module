import { render, screen } from '@testing-library/react';
import { AllCardMain } from './AllCardMain';
import { MainContext } from '../../pages/MainPage/Main.Page';
import { MemoryRouter } from 'react-router-dom';
import { IdataProduct } from '../../type/interfaces';

describe('AllCardMain component', () => {
  test('renders specified number of cards', async () => {
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
      {
        brand: 'Product 2',
        category: 'Product 2',
        description: 'Product 2',
        discountPercentage: 'Product 2',
        id: '2',
        images: ['image2.jpg'],
        price: 'Product 2',
        rating: 'Product 2',
        stock: 'Product 2',
        thumbnail: 'Product 2',
        title: 'Product 2',
      },
      {
        brand: 'Product 3',
        category: 'Product 3',
        description: 'Product 3',
        discountPercentage: 'Product 3',
        id: '3',
        images: ['image3.jpg'],
        price: 'Product 3',
        rating: 'Product 3',
        stock: 'Product 3',
        thumbnail: 'Product 3',
        title: 'Product 3',
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
      <MemoryRouter>
        <AllCardMain />
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

    const cardElements = screen.getAllByTestId('card-of-list');
    expect(cardElements.length).toBe(3);
  });

  test('отображает сообщение об отсутствии карт', () => {
    const arrProducts: IdataProduct[] = [];
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
      <MemoryRouter>
        <AllCardMain />
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

    const emptyMessage = screen.getByText(
      'Unfortunately nothing was found for your request!'
    );
    expect(emptyMessage).toBeInTheDocument();
  });
});
