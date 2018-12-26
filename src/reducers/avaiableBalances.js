import { DECREASE_BALANCES } from '../constants/ActionTypes'

const initialState = [{
    text: 'Use Redux',
    marked: false,
    id: 0
}]

export default function changeBalances(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case DECREASE_BALANCES:
            return [{
                text: action.text,
                marked: false,
                id: (state.length === 0) ? 0 : state[0].id + 1
            }]
        default:
            return state;
    }
}