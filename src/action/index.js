import {HANDLE_CHANGE, HANDLE_CHANGE_INDEX, ADD_PICTURE, ADD_SKILL} from "../constants/action-types";

export const handleChange = (content, value) => {
    return {
        type: HANDLE_CHANGE,
        [content]: value,
        name: content
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