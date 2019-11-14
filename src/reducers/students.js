import {HANDLE_CHANGE, HANDLE_CHANGE_INDEX, ADD_PICTURE, ADD_SKILL, ADD_ERROR, ADD_ERROR_EMPTY} from '../constants/action-types';

const userInfos = {
   picture: "",
   lastname: "",
   firstname: "",
   email: "",
   promotion: "",
   description: "",
   password: "",
   skills: [{skill: "", mark: ""}],
   isLoggin: "",
   isEmpty: ""
};
const studentsReducer = (state = userInfos, action) => {
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

      case ADD_PICTURE:
         return {
            ...state,
            picture: action.payload
         };

      case ADD_SKILL:
         return {
            ...state,
            skills: [...state.skills, action.payload]
         };

      case ADD_ERROR:
         return {
            ...state,
            isLoggin: true
         }

      case ADD_ERROR_EMPTY:
         return {
            ...state,
            isEmpty: true
      }
      default:
         return state;
   }
};

export default studentsReducer;