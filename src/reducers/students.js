import {HANDLE_CHANGE, HANDLE_CHANGE_INDEX, ADD_SKILL} from '../constants/action-types';

const userInfos = {
   lastname: "",
   firstname: "",
   email: "",
   promotion: "",
   description: "",
   password: "",
   skills: [{skill: "", mark: ""}],
};

const studentsReducer = (state = userInfos, action, userLogin) => {
   switch(action.type){
      case HANDLE_CHANGE:
         const actualName = action.name;
         return {
            ...state,
            [action.name]: action[actualName]
         };

      case HANDLE_CHANGE_INDEX:
         const actualNameIndex = action.name;
         state.skills[action.index][action.name] = action[actualNameIndex];
         return {
           ...state,
         };

      case ADD_SKILL:
         return {
            ...state,
            skills: [...state.skills, action.payload]
         };
      default:
         return state;
   }
};

export default studentsReducer;