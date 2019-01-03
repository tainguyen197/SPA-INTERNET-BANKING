import { DECREASE_BALANCES } from '../constants/ActionTypes'

const initialState = [{
    ID: undefined,
    AccountNumberFrom: undefined,
    AccountNumberTo: undefined,
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
        case 'DO_TRANSACTIONS':
            console.log('DO_TRANSACTIONS');
            console.log(action.payload);
            //gọi api lưu dữ liệu
            var data = undefined;
            if (action.payload.Type === 'CHUYEN_TIEN') {
                data = {
                    money: action.payload.MoneyTransaction,
                    numberAccountFrom: action.payload.AccountNumberFrom,
                    AccountFromBalance: action.payload.MoneyBalance,
                    numberAccountTo: action.payload.AccountNumberTo,
                    AccountToBalance: action.payload.MoneyBalanceReceiver
                }
            } else {

            }
            //cập nhật số tiền
            fetch('http://localhost:4000/user/updateBalanceUp', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "null"
                },
            })
                .catch(function (err) {
                    console.log(err);
                })
            //cập nhật số tiền
            fetch('http://localhost:4000/user/updateBalanceDown', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "null"
                },
            })
                .catch(function (err) {
                    console.log(err);
                })
            //ghi xuống db transaction mới
            var transaction = {
                AccountNumberFrom: action.payload.AccountNumberFrom,
                AccountNumberTo: action.payload.AccountNumberTo,
                Type: action.payload.Type,
                Time: action.payload.Time,
                MoneyTransaction: action.payload.MoneyTransaction,
                MoneyBalance: action.payload.MoneyBalance,
            }

            fetch('http://localhost:4000/user/newTransaction', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(transaction),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "null"
                },
            })
                .catch(function (err) {
                    console.log(err);
                })
            return [
                ...state,
                {
                    ...action.payload
                }];
        default:
            return state;
    }
}