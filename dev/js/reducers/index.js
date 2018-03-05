import {combineReducers} from 'redux';
import UserReducer from './reducer.user'
import ActiveUser from './reducer.activeUser'

export const allReducer = combineReducers({ users : UserReducer,ActiveUser:ActiveUser})   