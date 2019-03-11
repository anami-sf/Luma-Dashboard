import React from 'react';

const ApptCadance = ({apptCadance}) => {
    return(
        <div>
            { apptCadance.apptCadance
                ? <button>{apptCadance.apptCadance}</button>
                : <div>LumaHealth</div>  
            }
        </div>
    );
}

export default ApptCadance;