import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import ReduxStore from "./ReduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>
);

