import { 
    SET_CADANCE
} from './constants.js';

export const setCadance = (text) => {
    return {
        type: SET_CADANCE,  // This is a constant
        payload: text
    }
}