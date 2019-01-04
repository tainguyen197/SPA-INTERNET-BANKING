import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Routers  from './RouterURL/routers';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/css/bootstrap-theme.min.css';
import {createStore  } from 'redux';
import {Provider} from 'react-redux';
import * as action from './actions/availableBalances';
import rootReducer from './reducers/rootReducers';

//initialState
const initialState = []

//Create store
const store = createStore(rootReducer,initialState);

store.subscribe(() => {
    //console.log(store.getState());
})

// store.dispatch(action.DECREASE_BALANCES({name: 'b', age: 23,job:'nojob'}))
// store.dispatch(action.DECREASE_BALANCES({name: 'c', age: 23}))
// store.dispatch(action.DECREASE_BALANCES({name: 'd', age: 23}))
// store.dispatch(action.INCREASE_BALANCES({id: 2, age: 24}))
// store.dispatch(action.DELETE(2))

ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
        <Routers />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
