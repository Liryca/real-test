import { combineReducers,  legacy_createStore as createStore } from "redux";
import { listReducer } from "./reducer";
 const rootReducer = combineReducers({
     list: listReducer
 })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = createStore(rootReducer);
