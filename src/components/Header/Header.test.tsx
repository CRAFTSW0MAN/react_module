import { render, screen } from '@testing-library/react';
import { Header } from './Header';
describe('Header', () => {
  test('should render the logo image', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
  });
  test('should render the play music button', () => {
    render(<Header />);
    const playButton = screen.getByRole('button', { name: 'Play Music' });
    expect(playButton).toBeInTheDocument();
  });

  test('should render the error button', () => {
    render(<Header />);
    const errorButton = screen.getByRole('button', { name: 'Error' });
    expect(errorButton).toBeInTheDocument();
  });
});
