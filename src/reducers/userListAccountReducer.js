const initialState = [{
    id: undefined,
    NumberAccount: undefined,
    Balance: undefined
}]

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_LIST_ACCOUNT':
            return [
                ...state,
                {
                    ...action.payload
                }];
        default:
            return state;
    }
}