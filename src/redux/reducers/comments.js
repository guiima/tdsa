import { commentsTypes } from "../types/comments";

const INITIAL_STATE = {
  comment: {},
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentsTypes.SET_COMMENT:
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

export default commentsReducer;
