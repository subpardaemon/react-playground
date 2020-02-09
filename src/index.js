import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import * as dataStore from './dataStore';
import * as myActions from './ReduxActions';

const myStore = dataStore.createDataStore({
    sithLords: [
        {name: "Darth Plagueis, the wise", rank: "Grand Lord", skillLevel: 9.8, uid: "dplgs"},
        {name: "Sheev Palpatine aka Darth Sidious", rank: "Emperor", skillLevel: 9.1, uid: "shitface"},
        {name: "Count Dooku", rank: "Count", skillLevel: 8.2, uid: "ticktock"},
    ],
    cutoff: 8
}, myActions);

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
