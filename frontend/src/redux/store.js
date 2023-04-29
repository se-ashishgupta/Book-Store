import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/Reducers/userReducer";
import { myBooksReducer } from "./Reducers/bookReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    myBooks: myBooksReducer,
  },
});

export default store;
