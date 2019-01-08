import * as TYPES from "./movies.types";

const initialState = {};

export default (state = initialState, action) => {
  const { type, results } = action;
  switch (type) {
    case TYPES.ADD_MOVIES:
      return {
        ...state,
        results
      };
    default:
      return state;
  }
};
