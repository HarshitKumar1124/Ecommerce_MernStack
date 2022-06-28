
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"
import { productReducer } from "./Redux_Reducers/ProductReducer";


const reducer = combineReducers({
    products:productReducer

});

let initailState ={};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;