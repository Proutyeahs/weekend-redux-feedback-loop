import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers to store / edit / clear data
const surveyResults = (state = [], action) => {
    console.log(state)
    if (action.type === 'RESULT') {
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR') {
        return []
    }
    if (action.type === 'EDIT') {
        state = []
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        surveyResults
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
