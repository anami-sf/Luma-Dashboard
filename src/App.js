import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

const mapStateToProps = (state) => {
  return{
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onAgeUp: (event) => dispatch({type: 'AGE_UP', payload: event.target.value}),

  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
      {this.props.age?
           <div>{this.props.age}</div>
          : <div>LumaHealth</div>
  
      }
        
        <div>On what day would like to send reminders? </div>
        <select onChange={this.props.onAgeUp} >
          <option>Day 1</option>
          <option>Day 2</option>
          <option>Day 3</option>
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
