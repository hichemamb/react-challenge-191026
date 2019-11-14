import {HANDLE_CHANGE, HANDLE_CHANGE_INDEX, ADD_PICTURE, ADD_SKILL, ADD_ERROR, ADD_ERROR_EMPTY} from "../constants/action-types";

export const handleChange = (content, value) => {
    return {
        type: HANDLE_CHANGE,
        [content]: value,
        name: content
    }
};

export const addError = () => {
    return {
        type: ADD_ERROR
    }
};

export const addErrorEmpty = () => {
    return {
        type: ADD_ERROR_EMPTY
    }
};

export const handleChangeWithIndex = (content, value, index) => {
    return {
        type: HANDLE_CHANGE_INDEX,
        [content]: value,
        name: content,
        index,
    }
};

export const addPicture = (pictureLink) => {
    return {
        type: ADD_PICTURE,
        payload: pictureLink
    }
};

export const addSkill = (elementToAdd) => {
    return {
        type: ADD_SKILL,
        payload: elementToAdd
    }
};