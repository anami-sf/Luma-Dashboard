import { 
    SET_CADANCE,
    NEXT_QUESTION,
    PREVIOUS_QUESTION
} from './constants.js';

export const setCadance = (text) => {
    return {
        type: SET_CADANCE,  // This is a constant
        payload: text
    }
}

export const next = () => {
    return {
        type: NEXT_QUESTION  // This is a constant
    }
}

export const back = () => {
    return {
        type: PREVIOUS_QUESTION,  // This is a constant
    }
}