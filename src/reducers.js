import { 
    SET_CADANCE,
    SET_POSITION
} from './constants.js';

const initializeStateCadance = {
    apptCadance:null
};

export const apptCadance = (state=initializeStateCadance, action)=>{
    const newState = {...state}
    
    if(action.type===SET_CADANCE){
        newState.apptCadance = action.payload
    }

    return newState
};

const initializeStatePosition = {
    questionTracker:1
};

export const questionTracker = (state=initializeStatePosition, action)=>{
    const newState = {...state}

    if(action.type===SET_POSITION){
        newState.questionTracker = ++newState.questionTracker
    }
    
    return newState
}


