import {combineReducers, createStore} from "redux";
import {postReducer} from "./post.reducer"
import {userReducer} from "./user.reducer";

const rootReducer = combineReducers({postReducer, userReducer});
export const store = createStore(rootReducer)