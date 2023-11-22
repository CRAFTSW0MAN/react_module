import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '../../store/configureStore';
import { MainPage } from './Main.Page';

test('renders components in the correct order inside MainPage', () => {
  render(
    <StoreProvider>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </StoreProvider>
  );

  const main = screen.getByTestId('main');
  const mainOption = screen.getByTestId('main-option');
  const mainSection = screen.getByTestId('main-section');

  expect(main).toBeInTheDocument();
  expect(main).toContainElement(screen.getByTestId('header'));
  expect(main).toContainElement(mainOption);
  expect(main).toContainElement(mainSection);
  expect(mainOption).toContainElement(screen.getByTestId('limit'));
  expect(mainOption).toContainElement(screen.getByTestId('search'));
  expect(mainSection).toContainElement(screen.getByTestId('all-card-main'));
});
