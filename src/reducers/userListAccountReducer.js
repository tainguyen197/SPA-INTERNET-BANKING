import { userInfo } from "os";

const initialState = [{
    id: undefined,
    NumberAccount: undefined,
    Balance: undefined,
    Status: undefined
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
                //Cập nhật tài khoảng bị xóa lên server ở đây
                var numberAccount = action.payload;
                console.log(numberAccount); 
                var res = 'http://localhost:4000/user/deleteAccount?numberAccount=' + numberAccount;
                fetch(res, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Access-Control-Allow-Origin": "null"
                    },
                })
                    .catch(function (err) {
                        console.log(err);
                    })
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
                            Balance: account.Balance - action.payload.MoneyTransaction,
                            Status: account.Status
                        }
                    }
                    if (account.NumberAccount === action.payload.AccountNumberTo) {
                        return {
                            id: account.id,
                            NumberAccount: account.NumberAccount,
                            Balance: account.Balance + action.payload.MoneyTransaction,
                            Status: account.Status
                        }
                    }

                }
            })
        default:
            return state;
    }
}