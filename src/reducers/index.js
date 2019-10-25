import studentsReducer from './students';
import loggedReducer from './logged';
import {combineReducers} from "redux";

const allReducers = combineReducers({
    students: studentsReducer,
    logged: loggedReducer
});

export default allReducers;
