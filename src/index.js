import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';


import './index.css';
import App from './App';
import apptCadance from './reducers.js';

//const rootReducer = combineReducers({ apptCadance })


const store = createStore(
    apptCadance, 
    applyMiddleware(thunkMiddleware)
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
