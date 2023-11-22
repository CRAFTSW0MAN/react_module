import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IloaderDetailsProduct {
  loaderDetailsProduct: {
    isLoader: boolean;
  };
}

export interface IloaderDetailsProductReducer {
  isLoader: boolean;
}

const initialState: IloaderDetailsProductReducer = {
  isLoader: false,
};

const loaderDetailsProductReducer = createSlice({
  name: 'loaderDetailsProduct',
  initialState,
  reducers: {
    chengeLoaderDetailsProduct(state, action: PayloadAction<boolean>) {
      state.isLoader = action.payload;
    },
  },
});

export const { chengeLoaderDetailsProduct} = loaderDetailsProductReducer.actions;
export default loaderDetailsProductReducer.reducer;