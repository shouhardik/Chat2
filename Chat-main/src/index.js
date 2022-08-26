import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import {Provider} from "react-redux"
import store from "./store"
// Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCKGiADixRKT-Cbp4_4tf4VbeYJ5OpRNsg",
    authDomain: "web-messenger-2afac.firebaseapp.com",
    databaseURL: "https://web-messenger-2afac.firebaseio.com",
    projectId: "web-messenger-2afac",
    storageBucket: "web-messenger-2afac.appspot.com",
    messagingSenderId: "1086175253939",
    appId: "1:1086175253939:web:1ecf58028c61cca98e67c6",
    measurementId: "G-MM4X3K9D78"
  };
  firebase.initializeApp(firebaseConfig);
  window.store = store;
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
