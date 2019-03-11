import React from 'react';
import ApptCadance from '../components/apptCadance/apptCadance.js';

const FlowChart = ({apptCadance}) => {
    return(
        <div>
            <ApptCadance apptCadance = {apptCadance} />
        </div>
    );
}

export default FlowChart;