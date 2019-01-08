import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
    } from "redux";
import days from './Reduxer/Reduxer'
import logger from "redux-logger";
import thunk from 'redux-thunk'

let middleware = [logger, thunk];
const reducer = combineReducers({ days })

export default createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware)));
