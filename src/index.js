// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import app from './application.js';

// BEGIN (write your solution here)
const containerOneEl = document.querySelector('.container-1');
const containerOneInitialParams = {
  lng: 'en',
  clicksCount: 0,
};

const containerTwoEl = document.querySelector('.container-2');
const containerTwoInitialParams = {
  lng: 'ru',
  clicksCount: 1,
};

app(containerOneEl, containerOneInitialParams);
app(containerTwoEl, containerTwoInitialParams);
// END
