import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Container from "./components/Container";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import combinedReducer from "./redux/reducers";
import thunk from "redux-thunk";

let store=createStore(combinedReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Container/>
    </Provider>
);