import {SIGN_IN} from "../constants/action-types";
import {HANDLE_CHANGE} from "../constants/action-types";

export const login = () => {
    return {
        type: SIGN_IN
    }
};

export const handleChange = (content, value) => {
    return {
        type: HANDLE_CHANGE,
        [content]: value,
        name: content
    }
};