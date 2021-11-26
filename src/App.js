import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{

    UNSAFE_componentWillMount(){
        const firebaseConfig = {
            apiKey: 'AIzaSyA5jUto9JgaVDrigY1zXgfMYcI7xvgHuYY',
            authDomain: 'employees-6499b.firebaseapp.com',
            databaseURL: 'https://employees-6499b.firebaseio.com',
            projectId: 'employees-6499b',
            storageBucket: 'employees-6499b.appspot.com',
            messagingSenderId: '1092886373922',
            appId: '1:1092886373922:web:9dab710059b78bdf0b0c7b',
            measurementId: 'G-X0HGNGBWDZ'
        };
        if (!firebase.apps.length){
             // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();
        } else {
            firebase.app();
        }
    }

    render (){
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;


//watchman watch-del-all
//rm -rf node_modules
//start --reset-cache
//rm -rf /tmp/metro-*