import { commentsTypes } from "../types/comments";

const INITIAL_STATE = {
  comment: {},
  saveCommentAction: false,
  clearFormComments: false,
  clearTableComments: false,
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentsTypes.SET_COMMENT:
      return { ...state, comment: action.payload };
    case commentsTypes.SAVE_COMMENT:
      return { ...state, saveCommentAction: action.payload };
    case commentsTypes.CLEAR_COMMENT:
      return { ...state, clearFormComments: action.payload };
    case commentsTypes.CLEAR_TABLE_COMMENT:
      return { ...state, clearTableComments: action.payload };
    default:
      return state;
  }
};

export default commentsReducer;
