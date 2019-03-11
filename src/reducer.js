const initializeStateCadance = {
    age:null
};

const reducer = (state=initializeStateCadance, action)=>{
    const newState = {...state}
    
    if(action.type==='AGE_UP'){
        newState.age = action.payload
    }

    return newState
}

export default reducer;

