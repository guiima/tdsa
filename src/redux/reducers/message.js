import { messageTypes } from "../types/message";

const INITIAL_STATE = {
  messsage: "",
  openMessage: false,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case messageTypes.OPEN_MESSAGE:
      return { ...state, openMessage: action.payload };
    case messageTypes.SET_MESSAGE:
      return { ...state, messsage: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
