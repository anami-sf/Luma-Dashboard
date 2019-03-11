const initializeStateCadance = {
    apptCadance:null
};

const apptCadance = (state=initializeStateCadance, action)=>{
    const newState = {...state}
    
    if(action.type==='SET_CADANCE'){
        newState.apptCadance = action.payload
    }

    return newState
}

export default apptCadance;

