import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDcyk_YW7JRcOeDsEf05aRpsAcrKnPnbLs',
      authDomain: 'manager-391b1.firebaseapp.com',
      databaseURL: 'https://manager-391b1.firebaseio.com',
      projectId: 'manager-391b1',
      storageBucket: 'manager-391b1.appspot.com',
      messagingSenderId: '955203992667'
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
