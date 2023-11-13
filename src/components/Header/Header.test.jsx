import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
describe('Header', () => {
  it('should render the logo image', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
  });
  it('should render the play music button', () => {
    render(<Header />);
    const playButton = screen.getByRole('button', { name: 'Play Music' });
    expect(playButton).toBeInTheDocument();
  });
  it('should play and pause the music on button click', () => {
    render(<Header />);
    const playButton = screen.getByRole('button', { name: 'Play Music' });
    fireEvent.click(playButton);
    expect(playButton.textContent).toBe('Pause Music');
    fireEvent.click(playButton);
    expect(playButton.textContent).toBe('Play Music');
  });
  it('should render the error button', () => {
    render(<Header />);
    const errorButton = screen.getByRole('button', { name: 'Error' });
    expect(errorButton).toBeInTheDocument();
  });
  it('should throw an error on error button click', () => {
    render(<Header />);
    const errorButton = screen.getByRole('button', { name: 'Error' });
    expect(() => fireEvent.click(errorButton)).toThrow('Error!');
  });
});
