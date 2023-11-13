import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageProduct } from './PageProduct';
import * as api from '../../api/Api';
import { Params } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useParams: (): Params<string> => ({ id: '123' }),
  useLocation: (): Params<string> => ({ search: '' }),
  useNavigate: (): (() => void) => (): void => {},
}));
describe('ProfilePage component', () => {
  test('Ensure that the card component renders(Grogu) the relevant card data', async () => {
    vi.spyOn(api, 'ApiProduct').mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            images: ['test-image-url'],
            title: 'Test Product',
          });
        }, 1000);
      });
    });

    render(<PageProduct />);

    const groguSpinner = screen.getByTestId('grogu-spinner');
    expect(groguSpinner).toBeInTheDocument();
  });
});

// describe('PokemonDetails', () => {
//   const testId=10;
//   const location = '?limit=10&page=1&search=po'
//   test('should render the loader when loading', async () => {
//     render(
//       <MemoryRouter initialEntries={[`/product/${testId}${location.search}`]}>
//         <PageProduct />
//       </MemoryRouter>
//     );

//     const groguSpinner = screen.getByTestId('card-block');
//     expect(getByTestId('loader')).toBeInTheDocument();
//   });
// });
