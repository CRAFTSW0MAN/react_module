import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from './Pagination';
import { createMemoryHistory } from 'history';
import { StoreProvider } from '../../store/configureStore';

const history = createMemoryHistory();

test('8.1 Make sure the component updates URL query parameter when page changes for click Next.', async () => {
  render(
    <StoreProvider>
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    </StoreProvider>
  );

  const nextButton = screen.getByTestId('Next');

  await waitFor(() => {
    fireEvent.click(nextButton);
  });
  const page = await screen.findByTestId('page');
  expect(page).toHaveTextContent('2');

  await waitFor(() => {
    waitFor(() => {
      const searchParams = new URLSearchParams(history.location.search);
      expect(searchParams.get('page')).toBe('2');
    });
  });
});
test('8.1 Make sure the component updates URL query parameter when page changes for click Prev', async () => {


  render(
    <StoreProvider>
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    </StoreProvider>
  );


  const nextButton = screen.getByTestId('Prev');

  await waitFor(() => {
    fireEvent.click(nextButton);
  });
  const page = await screen.findByTestId('page');
  expect(page).toHaveTextContent('1');

  await waitFor(() => {
    waitFor(() => {
      const searchParams = new URLSearchParams(history.location.search);
      expect(searchParams.get('page')).toBe('1');
    });
  });
});
