import studentsReducer from './students';
import {combineReducers} from "redux";

const allReducers = combineReducers({
    userInfos: studentsReducer
});

export default allReducers;