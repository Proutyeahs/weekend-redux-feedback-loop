import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveyResults = (state = [], action) => {
    console.log(state)
    if (action.type === 'FEELING') {
        return [...state, action.payload]
    }
    if (action.type === 'UNDERSTAND') {
        return [...state, action.payload]
    }
    if (action.type === 'SUPPORT') {
        return [...state, action.payload]
    }
    if (action.type === 'COMMENT') {
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR') {
        return []
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
