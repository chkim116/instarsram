import { createAction, handleActions } from "redux-actions";

const LIKE = "LIKE";
const LIKECOUNTER = "LIKECOUNTER";

const intialState = {
  fill: "",
  color: "",
  counter: 0,
};

export const like = createAction(LIKE);
export const likeCounter = createAction(LIKECOUNTER);

export const likeReducers = handleActions(
  {
    [LIKE]: (state, action) => ({
      ...state,
      fill: "red",
      color: "red",
    }),
    [LIKECOUNTER]: (state, action) => ({
      ...state,
      counter: state.counter + 1,
    }),
  },
  intialState
);
