import React from 'react';

const ApptCadanceQA = ({onSetCadance}) => {
    return(
        <div>
            <select onChange={onSetCadance} >
                <option>Day 1</option>
                <option>Day 2</option>
                <option>Day 3</option>
            </select>
        </div>
    );
}

export default ApptCadanceQA;