import { createStore } from "redux";
import { Reducer as JobReducer } from "./reducer";

export const store = createStore(JobReducer);
