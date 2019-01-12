import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import appState from "./reducers";

import MoviesList from "./components/MoviesList/MoviesList";

import "./styles/variables.global.css";
import "./styles/breakpoints.global.css";
import "./App.css";

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appState,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
  }
}

export default App;
