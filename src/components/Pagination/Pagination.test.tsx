import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from './Pagination';
import { MainContext } from '../../pages/MainPage/Main.Page';
import { IdataProduct } from '../../type/interfaces.interface';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

test('8.1 Make sure the component updates URL query parameter when page changes for click Next.', async () => {
  const mockHandleUpdatePage = vi.fn();
  const mockhandleChangeSelect = vi.fn();
  const mockhandleUpdateSearch = vi.fn();
  const mockArrProducts: IdataProduct[] = [
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
  const mockSelectedValue = 1;

  render(
    <MemoryRouter>
      <MainContext.Provider
        value={{
          countPage: 1,
          countItemData: 40,
          dataSearch: '',
          selectedValue: mockSelectedValue,
          handleUpdatePage: mockHandleUpdatePage,
          arrProducts: mockArrProducts,
          handleChangeSelect: mockhandleChangeSelect,
          handleUpdateSearch: mockhandleUpdateSearch,
        }}
      >
        <Pagination />
      </MainContext.Provider>
    </MemoryRouter>
  );

  const nextButton = screen.getByTestId('Next');

  await waitFor(() => {
    fireEvent.click(nextButton);
  });
  const page = await screen.findByTestId('page');
  expect(page).toHaveTextContent('2');

  await waitFor(() => {
    expect(mockHandleUpdatePage).toHaveBeenCalledWith(2);
    waitFor(() => {
      const searchParams = new URLSearchParams(history.location.search);
      expect(searchParams.get('page')).toBe('2');
    });
  });
});
test('8.1 Make sure the component updates URL query parameter when page changes for click Prev', async () => {
  const mockHandleUpdatePage = vi.fn();
  const mockhandleChangeSelect = vi.fn();
  const mockhandleUpdateSearch = vi.fn();
  const mockArrProducts: IdataProduct[] = [
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
  const mockSelectedValue = 1;

  render(
    <MemoryRouter>
      <MainContext.Provider
        value={{
          countPage: 2,
          countItemData: 40,
          dataSearch: '',
          selectedValue: mockSelectedValue,
          handleUpdatePage: mockHandleUpdatePage,
          arrProducts: mockArrProducts,
          handleChangeSelect: mockhandleChangeSelect,
          handleUpdateSearch: mockhandleUpdateSearch,
        }}
      >
        <Pagination />
      </MainContext.Provider>
    </MemoryRouter>
  );

  const nextButton = screen.getByTestId('Prev');

  await waitFor(() => {
    fireEvent.click(nextButton);
  });
  const page = await screen.findByTestId('page');
  expect(page).toHaveTextContent('1');

  await waitFor(() => {
    expect(mockHandleUpdatePage).toHaveBeenCalledWith(1);
    waitFor(() => {
      const searchParams = new URLSearchParams(history.location.search);
      expect(searchParams.get('page')).toBe('1');
    });
  });
});
