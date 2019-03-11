import { 
    SET_CADANCE,
    SET_POSITION
} from './constants.js';

export const setCadance = (text) => {
    return {
        type: SET_CADANCE,  // This is a constant
        payload: text
    }
}

export const setPosition = () => {
    return {
        type: SET_POSITION,  // This is a constant
    }
}