import {combineReducers} from 'redux';
import { userListReducer } from './userListReducer';
const rootReducer=combineReducers({
    userListReducer,
})
export default rootReducer;