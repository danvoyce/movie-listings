import * as TYPES from "./genres.types";
import genres from "./genres.fixture";

const initialState = {
  all: genres,
  selected: []
};

const getUpdateSelectedGenres = (id, selected) => {
  let clonedArray = selected.slice(0);
  const selectedIndex = selected.indexOf(id);
  if (selectedIndex > -1) {
    // remove
    clonedArray.splice(selectedIndex, 1);
  } else {
    clonedArray.push(id);
  }

  return clonedArray;
};

export default (state = initialState, action) => {
  const { type, results, id } = action;
  switch (type) {
    case TYPES.TOGGLE_GENRE:
      return {
        ...state,
        selected: getUpdateSelectedGenres(id, state.selected)
      };
    case TYPES.ADD_GENRES:
      return {
        ...state,
        all: results
      };
    default:
      return state;
  }
};
