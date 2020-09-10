import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC2N9dI98T94MFgkBOKqBwdZR37rZS6ZYc',
      authDomain: 'manager-36700.firebaseapp.com',
      databaseURL: 'https://manager-36700.firebaseio.com',
      projectId: 'manager-36700',
      storageBucket: 'manager-36700.appspot.com',
      messagingSenderId: '312920849356'
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
