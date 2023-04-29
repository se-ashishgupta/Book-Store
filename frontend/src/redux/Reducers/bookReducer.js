import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const myBooksReducer = createReducer(initialState, {
  myBooksRequest: (state) => {
    state.loading = true;
  },
  myBooksSuccess: (state, action) => {
    state.loading = false;
    state.books = action.payload;
  },
  myBooksFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  newBookRequest: (state) => {
    state.loading = true;
  },
  newBookSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  newBookFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deleteBookRequest: (state) => {
    state.loading = true;
  },
  deleteBookSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteBookFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
