import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './reducers/apiDataReducer';

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
