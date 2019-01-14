import * as TYPES from "./genres.types";
// import genres from "./genres.fixture";

const initialState = {
  all: [],
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

const getAllSelected = all => all.map(({ id }) => id);

export default (state = initialState, action) => {
  const { type, results, id } = action;
  switch (type) {
    case TYPES.TOGGLE_GENRE:
      return {
        ...state,
        selected: getUpdateSelectedGenres(id, state.selected)
      };
    case TYPES.TOGGLE_CHECK_ALL:
      return {
        ...state,
        selected: state.selected.length ? [] : getAllSelected(state.all)
      };
    case TYPES.ADD_GENRES:
      return {
        ...state,
        all: state.all.concat(results)
      };
    default:
      return state;
  }
};
