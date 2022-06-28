import { combineReducers } from 'redux';
import countReducer from './counReducer';
const reducers = combineReducers({
    incrementCount: countReducer
})
export default (state, action) => reducers(state, action)