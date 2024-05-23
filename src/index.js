import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'; 
import { createStore } from 'redux';
import {rootReducers} from '../src/redux/reducers/rootReducers'
import App from './App';
//  tạo ra store tổng ứng dụng
const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

