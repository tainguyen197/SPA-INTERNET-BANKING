import {combineReducers} from 'redux';
import userAccountTracsactionReducer from './userAccountTracsactionReducer';
import userReducer from './userReducer';
import UserListAccountReducer from './userListAccountReducer'

const rootReducer = combineReducers({
    userReducer,
    userAccountTracsactionReducer,
    UserListAccountReducer
})

export default rootReducer;