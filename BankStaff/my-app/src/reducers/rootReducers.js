import {combineReducers} from 'redux';
import userAccountTracsactionReducer from './userAccountTracsactionReducer';
import userReducer from './userReducer';
import UserListAccountReducer from './userListAccountReducer'
import UserReceiverReducer from './userReceiverTrans'

const rootReducer = combineReducers({
    userReducer,
    userAccountTracsactionReducer,
    UserListAccountReducer,
    UserReceiverReducer
})

export default rootReducer;