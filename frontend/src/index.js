import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

export const server = "https://bookstoreserver-r4u6.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
