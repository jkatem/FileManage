import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import MatterReducer from './redux/reducers/matterReducer'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import matterReducer from './redux/reducers/matterReducer';

const store = createStore(
  MatterReducer, applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ Provider>,

  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

/*

- rootReducer holds my matterReducer
- Redux-Thunk Middleware
  - Thunk allows us to return a function inside of our action creator. Normally, an action creator returns a plain JS 
    Object.
  - The function receives the store's dispatch function as its argument. 

*/
