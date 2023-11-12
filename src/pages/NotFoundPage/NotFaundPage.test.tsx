import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { expect } from 'vitest';

test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']} initialIndex={0}>
      <Routes>
        <Route path="/invalid-route" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>
  );
  const notFoundPage = screen.getByTestId('not-found-page');
  expect(notFoundPage).toBeInTheDocument();
});
