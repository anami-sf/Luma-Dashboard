import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import { setCadance, next, back } from '../actions';
import FlowChart from './flow_chart.js';
import Form from './form.js';

const mapStateToProps = (state) => {
  return{
    apptCadance: state.apptCadance,
    questionTracker: state.questionTracker
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSetCadance: (event) => dispatch(setCadance(event.target.value)),
    nextQuestion: () => dispatch(next()),
    previousQuestion: () => dispatch(back())
  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <FlowChart apptCadance = {this.props.apptCadance}/> 
        <Form 
        onSetCadance={this.props.onSetCadance} 
        questionTracker={this.props.questionTracker}
        previousQuestion={this.props.previousQuestion}
        nextQuestion={this.props.nextQuestion}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
