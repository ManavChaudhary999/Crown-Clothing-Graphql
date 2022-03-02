import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger"; // library or middelware to debug log our state

import rootReducer from "./root.reducer";

const middlewares = [];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
