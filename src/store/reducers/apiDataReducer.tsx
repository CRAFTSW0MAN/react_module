import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdataApi {
  apiData: {
    searchValue: string;
    numberPage: number;
    countLimit: number;
  };
}

export interface IReducerApi {
  searchValue: string;
  numberPage: number;
  countLimit: number;
}

const initialState: IReducerApi = {
  searchValue: localStorage.getItem('searchQuery') || '',
  numberPage: 1,
  countLimit: 10,
};

const apiDataReducer = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    incrementNumberPage: (state) => {
      state.numberPage += 1;
    },
    decrementNumberPage: (state) => {
      state.numberPage -= 1;
    },
    chengeNumberPage(state, action: PayloadAction<number>) {
      state.numberPage = action.payload;
    },

    chengeCountLimit(state, action: PayloadAction<number>) {
      state.countLimit = action.payload;
    },
  },
});

export const {
  changeSearchValue,
  incrementNumberPage,
  decrementNumberPage,
  chengeNumberPage,
  chengeCountLimit,
} = apiDataReducer.actions;
export default apiDataReducer.reducer;
