import * as TYPES from "./genres.types";
import * as api from "../../api/api";

export const fetchGenres = () => dispatch => {
  return api
    .fetchGenres()
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: TYPES.ADD_GENRES,
        results: data.genres
      });
    });
};

export const toggleGenre = id => dispatch => {
  dispatch({
    type: TYPES.TOGGLE_GENRE,
    id
  });
};

export const toggleCheckAll = () => dispatch => {
  dispatch({
    type: TYPES.TOGGLE_CHECK_ALL
  });
};
