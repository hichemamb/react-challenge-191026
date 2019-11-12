import { studentsReducer, studentsListReducer } from './students';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userInfos: studentsReducer,
    studentsList: studentsListReducer
});

export default allReducers;
