import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./pages/main";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
