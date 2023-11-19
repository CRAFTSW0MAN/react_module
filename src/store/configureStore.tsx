import { configureStore } from '@reduxjs/toolkit';
import { apiProducts } from '../api/Api';
import apiCountItem from './reducers/apiCountItem';
import apiDataReducer from './reducers/apiDataReducer';
import loaderAllProductsReducer  from './reducers/LoaderAllProduct';
import loaderDetailsProductReducer from './reducers/loaderProduct'


export default configureStore({
  reducer: {
    apiData: apiDataReducer,
    apiCountItem: apiCountItem,
    loaderAllProducts: loaderAllProductsReducer ,
    loaderDetailsProduct: loaderDetailsProductReducer,
    [apiProducts.reducerPath]: apiProducts.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(apiProducts.middleware),
});

