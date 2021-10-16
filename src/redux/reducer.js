import { combineReducers } from 'redux';
import addUser from './addUser';
import userLog from './userLog';


const AppReducer = combineReducers({
    addUser,
    userLog,
});

export default AppReducer;