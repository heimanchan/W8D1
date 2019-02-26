import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

// Testing
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // Testing
  
  // let preloadedState = undefined;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});