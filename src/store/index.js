import { configureStore } from '@reduxjs/toolkit';
import quotesSlice from './quotes-slice';
import commentsSlice from './comments-slice';

const store = configureStore({
  reducer: {
    quotes: quotesSlice.reducer,
    comments: commentsSlice.reducer,
  }
});

export default store;