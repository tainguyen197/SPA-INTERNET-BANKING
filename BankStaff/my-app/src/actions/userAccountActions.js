
export function USER_LIST_ACCOUNT(payload){
    return{
        type: 'USER_LIST_ACCOUNT',
        payload
    }
}


export function USER_ACCOUNT_TRANSACTIONS(payload){
    return{
        type: 'USER_ACCOUNT_TRANSACTIONS',
        payload
    }
}


export function DO_TRANSACTIONS(payload){
    return{
        type: 'DO_TRANSACTIONS',
        payload
    }
}
