import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IApiCountItem {
  apiCountItem: {
    count: number;
  };
}

export interface IReducerApiCountItem {
  count: number;
}

const initialState: IReducerApiCountItem = {
  count: 100,
};

const apiCountItemReducer = createSlice({
  name: 'apiCountItem',
  initialState,
  reducers: {
    chengeApiCountItem(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { chengeApiCountItem } = apiCountItemReducer.actions;
export default apiCountItemReducer.reducer;
