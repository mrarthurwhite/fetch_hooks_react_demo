import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'; // this allows us to create store
import { Provider } from 'react-redux'; 
// we pass the store obj to top level container Provider
import rootReducer from './reducers/rootReducer.js';

const store = createStore(rootReducer);

const rootElement =   document.getElementById('root')
// added Provider to wrap around App
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider> ,
  rootElement
);
