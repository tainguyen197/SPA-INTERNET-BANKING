import * as types from '../constants/ActionTypes'

export function DECREASE_BALANCES(payload){
    console.log('action-changeBalances');
    return{
        type: 'DECREASE_BALANCES',
        payload
    }
}

export function INCREASE_BALANCES(payload){
    return{
        type: 'INCREASE_BALANCES',
        payload
    }
}

export function DELETE(id){
    return{
        type: 'DELETE',
        id: id
    }
}