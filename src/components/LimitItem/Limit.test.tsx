import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LimitItem } from './LimitItem';

const mockStore = configureStore([]);
const store = mockStore({
  apiData: {
    countLimit: 20
  }
});

test('should render the correct initial selected value in the dropdown', () => {
  render(
    <Provider store={store}>
      <LimitItem />
    </Provider>
  );

  const select = screen.getByTestId('select');
  expect(select).toHaveValue('20');
});