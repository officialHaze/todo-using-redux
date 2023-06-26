import { combineReducers } from "@reduxjs/toolkit";
import todoOperations from "./todoOperations.reducers";

const rootReducer = combineReducers({
    todoOperations
})

export default rootReducer