import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '../../store/configureStore';
import { Search } from './Search';

describe('Search', () => {
  it('9.1 Verify that clicking the Search button saves the entered value to the local storage', () => {
    const dataSearch = 'test query';
    render(
      <StoreProvider>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </StoreProvider>
    );
    const inputElement = screen.getByPlaceholderText('Search...');
    const searchButton = screen.getByAltText('SearchLogo');
    const deleteButton = screen.getByAltText('DeleteLogo');
    fireEvent.change(inputElement, { target: { value: dataSearch } });
    fireEvent.click(searchButton);
    fireEvent.click(deleteButton);
    const savedQuery = localStorage.getItem('searchQuery');
    expect(savedQuery).toBe('test query');
    localStorage.removeItem('searchQuery');
  });
});

describe('Search component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('9.2 Check that the component retrieves the value from the local storage upon mounting', () => {

    localStorage.setItem('searchQuery', 'test query');

    render(
      <StoreProvider>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </StoreProvider>
    );

    expect(screen.getByPlaceholderText('Search...')).toHaveValue('test query');
    localStorage.removeItem('searchQuery');
  });
});