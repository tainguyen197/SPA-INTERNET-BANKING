const initialState = [{
    ID: undefined,
    IDUser: undefined,
    Name: undefined,
    Account: undefined
}]

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_ACCOUNT_RECEIVER':
            return [
                ...state,
                {
                    ...action.payload
                }];
        default:
            return state;
    }
}