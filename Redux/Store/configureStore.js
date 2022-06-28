import { createStore, applyMiddleware, composeWithDevTools } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducers/index";
import createSagaMiddleware from 'redux-saga'

const store = createStore(reducers, applyMiddleware())
export default store
