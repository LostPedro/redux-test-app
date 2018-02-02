import React, { Component } from 'react';
import { } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBXbFPUNeZZ-deFBCWB3L6Ao6n5_JRkC4E',
      authDomain: 'manager-f0818.firebaseapp.com',
      databaseURL: 'https://manager-f0818.firebaseio.com',
      projectId: 'manager-f0818',
      storageBucket: '',
      messagingSenderId: '317409183094'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
