import { createStore, combineReducers } from "redux";

import comments from "./reducers/comments";

const reducers = combineReducers({ comments });

const store = createStore(reducers);

export default store;
