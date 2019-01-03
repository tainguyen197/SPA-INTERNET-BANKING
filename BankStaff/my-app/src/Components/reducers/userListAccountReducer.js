import { userInfo } from "os";

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
        case 'DELETE_ACCOUNT':
        console.log('DELETE');
                return state.filter(account => account.NumberAccount !== action.payload)
        case 'UPDATE_LIST_ACCOUNT':
            return state.map(account => {
                if (account.NumberAccount !== action.payload.AccountNumberFrom && account.NumberAccount !== action.payload.AccountNumberTo) {
                    return account;
                }
                else {
                    if (account.NumberAccount === action.payload.AccountNumberFrom) {
                        return {
                            id: account.id,
                            NumberAccount: account.NumberAccount,
                            Balance: account.Balance - action.payload.MoneyTransaction
                        }
                    }
                    if (account.NumberAccount === action.payload.AccountNumberTo) {
                        return {
                            id: account.id,
                            NumberAccount: account.NumberAccount,
                            Balance: account.Balance + action.payload.MoneyTransaction
                        }
                    }

                }
            })
        default:
            return state;
    }
}