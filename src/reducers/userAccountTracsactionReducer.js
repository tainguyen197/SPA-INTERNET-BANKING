import { DECREASE_BALANCES } from '../constants/ActionTypes'

const initialState = [{
    ID: undefined,
    AccountNumber: undefined,
    Type: undefined,
    Time: undefined,
    MoneyTransaction: undefined,
    MoneyBalance: undefined
}]

let id = 0;
export default function changeBalances(state = initialState, action) {
    switch (action.type) {
        case 'USER_ACCOUNT_TRANSACTIONS':
            return [
                ...state,
                {
                    ...action.payload
                }];
        default:
            return state;
    }
}