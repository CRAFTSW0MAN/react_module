import { configureStore } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { apiProducts } from '../api/Api';
import apiCountItem from './reducers/apiCountItem';
import apiDataReducer from './reducers/apiDataReducer';
import loaderAllProductsReducer  from './reducers/loaderAllProduct';
import loaderDetailsProductReducer from './reducers/loaderProduct'


const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    apiCountItem: apiCountItem,
    loaderAllProducts: loaderAllProductsReducer ,
    loaderDetailsProduct: loaderDetailsProductReducer,
    [apiProducts.reducerPath]: apiProducts.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(apiProducts.middleware),
});

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}