import * as TYPES from "./movies.types";

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const { type, results } = action;
  switch (type) {
    case TYPES.ADD_MOVIES:
      return {
        ...state,
        all: results
      };
    default:
      return state;
  }
};
