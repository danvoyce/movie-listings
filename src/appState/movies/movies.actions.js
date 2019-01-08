import * as TYPES from "./movies.types";
import * as api from "../../api/api";

export const fetchMovies = () => dispatch => {
  api
    .fetchMovies()
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: TYPES.ADD_MOVIES,
        results: data.results
      });
    });
};
