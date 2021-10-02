import { combineReducers } from 'redux';
import addUser from './addUser';
import getProductList from './getProductList';


const AppReducer = combineReducers({
    addUser,
    getProductList,
});

export default AppReducer;