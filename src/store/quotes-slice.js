import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  isLoading: true,
  numberOfQuotes: 0
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    loadQuotes(state, action) {
      state.quotes = action.payload;
      state.numberOfQuotes = action.payload.length;
    },

    addQuote(state, action) {
      state.quotes.push(action.payload);
      state.numberOfQuotes++;
    },

    setLoadingStart(state) {
      state.isLoading = true;
    },

    setLoadingEnd(state) {
      state.isLoading = false;
    }


  }
});

export const quotesActions = quotesSlice.actions;
export default quotesSlice;