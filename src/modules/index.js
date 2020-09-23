import { combineReducers } from "redux";
import { likeReducers } from "./Like";

export const rootReducers = combineReducers({ likeReducers });
