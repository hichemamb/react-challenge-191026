import {HANDLE_CHANGE} from '../constants/action-types';

const userInfos = {
   lastname: "",
   firstname: "",
   email: "",
   promotion: "",
   description: "",
   password: ""
};

const handleChangeReducer = (state = userInfos, action) =>{
   switch(action.type){
      case HANDLE_CHANGE:
         const actualName = action.name;
         return {
            ...state,
            [action.name]: action[actualName]
         };
      default:
         return state;
   }
};

export default handleChangeReducer;