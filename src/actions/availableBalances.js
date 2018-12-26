import * as types from '../constants/ActionTypes'

export function changeBalances(balances){
    console.log('action-changeBalances');
    return{
        type: types.DECREASE_BALANCES,
        text: 'chan'
    }
}