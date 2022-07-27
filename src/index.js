import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '../src/app/App.js';
import { store } from './app/store.js';

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();

store.subscribe(render);