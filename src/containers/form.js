import React from 'react';
import ApptCadanceQA from '../components/form/apptCadanceQA.js';

const Form = ({onSetCadance, questionTracker, nextQuestion}) => {
    return(
        <div>
            {console.log(questionTracker.questionTracker)}
            {questionTracker.questionTracker===1
                ? <ApptCadanceQA 
                    onSetCadance = {onSetCadance}
                    nextQuestion = {nextQuestion}
                />
                : <div>Next Question</div>
            }
            <button onClick={nextQuestion}>Next</button>
        </div>
    );
}

export default Form;