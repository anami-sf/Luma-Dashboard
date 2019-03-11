import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

const mapStateToProps = (state) => {
  return{
    apptCadance: state.apptCadance
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSetCadance: (event) => dispatch({type: 'SET_CADANCE', payload: event.target.value}),

  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
      {this.props.apptCadance?
           <div>{this.props.apptCadance}</div>
          : <div>LumaHealth</div>
  
      }
        
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
