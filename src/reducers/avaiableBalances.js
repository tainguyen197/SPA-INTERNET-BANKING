import { DECREASE_BALANCES } from '../constants/ActionTypes'

const initialState = [{
    text: 'Use Redux',
    marked: false,
    id: 0
}]

let id = 0;
export default function changeBalances(state, action) {
    switch (action.type) {
        case 'DECREASE_BALANCES':
            return [
                ...state,
                {
                    ...action.payload
                }];
        case 'INCREASE_BALANCES':
            return state.map(user => {
                if (user.id !== action.payload.id){
                    return user;
                }
                else {
                    return {
                        ...user,
                        ...action.payload
                    };
                }
            });
            case 'DELETE':
                return state.filter(user => user.id !== action.id);
        default:
            return state;
    }
}