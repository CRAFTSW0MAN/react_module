import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IloaderAllProducts {
  loaderAllProducts: {
    isLoader: boolean;
  };
}

export interface IloaderAllProductsReducer {
  isLoader: boolean;
}

const initialState: IloaderAllProductsReducer = {
  isLoader: false,
};

const loaderAllProductsReducer = createSlice({
  name: 'loaderAllProducts',
  initialState,
  reducers: {
    chengeLoaderAllProducts(state, action: PayloadAction<boolean>) {
      state.isLoader = action.payload;
    },
  },
});

export const { chengeLoaderAllProducts } = loaderAllProductsReducer.actions;
export default loaderAllProductsReducer.reducer;