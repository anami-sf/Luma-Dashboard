import React from 'react';

const ApptCadanceQA = ({onSetCadance,nextQuestion}) => {
    return(
        <div>      
            <div>On what day would you like to send reminders? </div>
            <div>
                <select onChange={onSetCadance} >
                    <option>Day 1</option>
                    <option>Day 2</option>
                    <option>Day 3</option>
                </select>
            </div>
        </div>
    );
}

export default ApptCadanceQA;