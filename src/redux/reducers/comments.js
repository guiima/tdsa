import { commentsTypes } from "../types/comments";

const INITIAL_STATE = {
  comment: {},
  saveCommentAction: false,
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentsTypes.SET_COMMENT:
      return { ...state, comment: action.payload };
    case commentsTypes.SAVE_COMMENT:
      return { ...state, saveCommentAction: action.payload };
    default:
      return state;
  }
};

export default commentsReducer;
