import "../css/popup.css";
import Greeting from "./popup/Greeting";
import React from 'react';
import {render} from 'react-dom';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'example'
});

render(
  <Provider store={proxyStore}><Greeting/></Provider>,
  window.document.getElementById("app-container")
);
