import { createStore, combineReducers } from "redux";

import comments from "./reducers/comments";
import message from "./reducers/message";

const reducers = combineReducers({ comments, message });

const store = createStore(reducers);

export default store;
