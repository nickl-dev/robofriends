import './index.css';
import { createLogger } from 'redux-logger';
import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducers';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ThunkMiddleware from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({ searchRobots, requestRobots })
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ThunkMiddleware));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
