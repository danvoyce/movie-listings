import { combineReducers } from "redux";
import movies from "./appState/movies/movies.reducer";
import genres from "./appState/genres/genres.reducer";

export default combineReducers({
  movies,
  genres
});
