import studentsReducer from './students';
import loggedReducer from './logged';
import handleChangeReducer from './handleChange';
import {combineReducers} from "redux";

const allReducers = combineReducers({
    students: studentsReducer,
    logged: loggedReducer,
    userInfos: handleChangeReducer
});

export default allReducers;
