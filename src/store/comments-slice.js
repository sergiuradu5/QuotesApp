import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  isLoading: true,
  numberOfComments: 0
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    loadComments(state, action) {
      state.comments = action.payload;
      state.numberOfComments = action.payload.length;
    },

    clearComments(state) {
      state.comments = [];
    },

    addComment(state, action) {
      state.comments.push(action.payload);
    },

    setLoadingStart(state) {
      state.isLoading = true;
    },

    setLoadingEnd(state) {
      state.isLoading = false;
    }
  }
});

export const commentsActions = commentsSlice.actions;
export default commentsSlice;