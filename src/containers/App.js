import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import { setCadance } from '../actions';
import FlowChart from './flow_chart.js';

const mapStateToProps = (state) => {
  return{
    apptCadance: state.apptCadance
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSetCadance: (event) => dispatch(setCadance(event.target.value))
  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <FlowChart apptCadance = {this.props.apptCadance}/> 
        <div>On what day would like to send reminders? </div>
        <select onChange={this.props.onSetCadance} >
          <option>Day 1</option>
          <option>Day 2</option>
          <option>Day 3</option>
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
