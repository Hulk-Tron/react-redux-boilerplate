import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {allReducer} from './reducers';
import {Provider} from 'react-redux';
import App from './component/App';




const store = createStore(allReducer);

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>
        ,
    document.getElementById('root')
);
