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

export const questionTracker = (state=1, action)=>{
    const newState = {...state}

    if(action.type===SET_POSITION){
        newState.position = newState.position++
    }
    

    return newState
}


