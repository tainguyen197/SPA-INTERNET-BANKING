import {combineReducers} from 'redux';
import avaiableBalacesReducer from './avaiableBalances';
import userReducer from './userReducer';
import UserListAccountReducer from './userListAccountReducer'

const rootReducer = combineReducers({
    userReducer,
    avaiableBalacesReducer,
    UserListAccountReducer
})

export default rootReducer;