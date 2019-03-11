import React from 'react';
import ApptCadance from '../components/flow_chart/apptCadance.js';

const FlowChart = ({apptCadance}) => {
    return(
        <div>
            <ApptCadance apptCadance = {apptCadance} />
        </div>
    );
}

export default FlowChart;