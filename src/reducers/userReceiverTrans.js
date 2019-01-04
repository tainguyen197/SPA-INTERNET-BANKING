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
        case 'UPDATE_LIST_RECEIVER':
           console.log(action)
            return state.map(receiver => {
                console.log(receiver);
                if (receiver.IDUser !== action.payload.ID)
                    return receiver;
                else {
                    console.log('UPDATE');
                    return {
                        ID: receiver.ID,
                        IDUser: receiver.IDUser,
                        Name: action.payload.Name,
                        Account: receiver.Account
                    }
                }
            })
        default:
            return state;
    }
}